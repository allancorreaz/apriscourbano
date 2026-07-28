import "server-only";

import { desc, eq } from "drizzle-orm";
import { getDb } from "../db";
import {
  auditLogs,
  mediaItems,
  siteSettings,
  users,
  type AuditLog,
  type ChurchUser,
  type MediaItem,
} from "../db/schema";
import {
  hasPermission,
  isRole,
  roleDefinitions,
  type Permission,
  type Role,
} from "./access-control";
import type {
  AdminState,
  AdminUserDto,
  AuditLogDto,
  MediaItemDto,
} from "./admin-types";
import type { ChatGPTUser } from "./chatgpt-auth";
import { getChatGPTUser } from "./chatgpt-auth";

export class AdminAccessError extends Error {
  status: number;

  constructor(message: string, status = 403) {
    super(message);
    this.status = status;
  }
}

export type Actor = ChurchUser & { role: Role };

const cleanEmail = (email: string) => email.trim().toLocaleLowerCase("pt-BR");

function runtimeValue(key: string) {
  return process.env[key] ?? "";
}

function configuredAdminEmail() {
  return cleanEmail(runtimeValue("ADMIN_EMAIL"));
}

function asRole(value: string): Role {
  return isRole(value) ? value : "LEITURA";
}

function userDto(user: ChurchUser): AdminUserDto {
  return {
    ...user,
    role: asRole(user.role),
    status: user.status === "INACTIVE" ? "INACTIVE" : "ACTIVE",
  };
}

function auditDto(item: AuditLog): AuditLogDto {
  return {
    ...item,
    actorRole: asRole(item.actorRole),
  };
}

function mediaDto(item: MediaItem): MediaItemDto {
  return {
    ...item,
    status: item.status === "DRAFT" ? "DRAFT" : "PUBLISHED",
    featured: Boolean(item.featured),
  };
}

async function recordAudit(
  actor: Actor,
  action: string,
  area: string,
  target: string,
  details = "",
) {
  const db = await getDb();
  await db.insert(auditLogs).values({
    actorUserId: actor.id,
    actorEmail: actor.email,
    actorName: actor.name,
    actorRole: actor.role,
    action,
    area,
    target,
    details: details.slice(0, 1500),
  });
}

export async function resolveCurrentUser(
  identity: ChatGPTUser,
): Promise<Actor | null> {
  const email = cleanEmail(identity.email);
  const db = await getDb();
  const [existing] = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existing) {
    if (existing.status !== "ACTIVE") return null;

    if (identity.fullName && identity.fullName !== existing.name) {
      await db
        .update(users)
        .set({
          name: identity.fullName,
          updatedAt: new Date().toISOString(),
        })
        .where(eq(users.id, existing.id));
      existing.name = identity.fullName;
    }

    return { ...existing, role: asRole(existing.role) };
  }

  const adminEmail = configuredAdminEmail();
  if (!adminEmail || email !== adminEmail) return null;

  const [created] = await db
    .insert(users)
    .values({
      email,
      name: identity.fullName ?? "Allan",
      role: "ADMINISTRADOR",
      status: "ACTIVE",
    })
    .returning();

  const actor = { ...created, role: "ADMINISTRADOR" as const };
  await recordAudit(
    actor,
    "CRIAR",
    "USUÁRIOS",
    actor.email,
    "Perfil administrador inicial criado com segurança.",
  );
  return actor;
}

export async function requireActor(permission?: Permission): Promise<Actor> {
  const identity = await getChatGPTUser();
  if (!identity) {
    throw new AdminAccessError("É necessário entrar para continuar.", 401);
  }

  const actor = await resolveCurrentUser(identity);
  if (!actor) {
    throw new AdminAccessError(
      "Seu usuário não está ativo ou ainda não recebeu um perfil de acesso.",
      403,
    );
  }

  if (permission && !hasPermission(actor.role, permission)) {
    throw new AdminAccessError(
      "Seu perfil não possui permissão para esta ação.",
      403,
    );
  }

  return actor;
}

export async function getAdminState(actor: Actor): Promise<AdminState> {
  const db = await getDb();
  const canManageUsers = hasPermission(actor.role, "users.manage");
  const canViewReports = hasPermission(actor.role, "reports.view");

  const [allUsers, allAuditLogs, allMediaItems, allSettings] =
    await Promise.all([
      canManageUsers
        ? db.select().from(users).orderBy(users.name)
        : Promise.resolve([actor]),
      canViewReports
        ? db
            .select()
            .from(auditLogs)
            .orderBy(desc(auditLogs.createdAt), desc(auditLogs.id))
            .limit(150)
        : Promise.resolve([]),
      db
        .select()
        .from(mediaItems)
        .orderBy(desc(mediaItems.createdAt), desc(mediaItems.id))
        .limit(100),
      db.select().from(siteSettings),
    ]);

  return {
    currentUser: {
      ...userDto(actor),
      permissions: roleDefinitions[actor.role].permissions,
    },
    users: allUsers.map(userDto),
    auditLogs: allAuditLogs.map(auditDto),
    mediaItems: allMediaItems.map(mediaDto),
    settings: Object.fromEntries(
      allSettings.map((setting) => [setting.key, setting.value]),
    ),
  };
}

export async function createUser(
  actor: Actor,
  input: { name: string; email: string; role: Role },
) {
  if (!hasPermission(actor.role, "users.manage")) {
    throw new AdminAccessError("Sem permissão para administrar usuários.");
  }

  const name = input.name.trim();
  const email = cleanEmail(input.email);
  if (name.length < 2) {
    throw new AdminAccessError("Informe o nome do usuário.", 400);
  }
  if (!email.includes("@")) {
    throw new AdminAccessError("Informe um e-mail válido.", 400);
  }
  if (!isRole(input.role)) {
    throw new AdminAccessError("Perfil de acesso inválido.", 400);
  }

  const db = await getDb();
  const [existing] = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);
  if (existing) {
    throw new AdminAccessError("Este e-mail já está cadastrado.", 409);
  }

  const [created] = await db
    .insert(users)
    .values({ name, email, role: input.role, status: "ACTIVE" })
    .returning();

  await recordAudit(
    actor,
    "CRIAR",
    "USUÁRIOS",
    email,
    `Usuário criado com o perfil ${roleDefinitions[input.role].label}.`,
  );
  return userDto(created);
}

export async function updateUser(
  actor: Actor,
  id: number,
  input: { role?: Role; status?: "ACTIVE" | "INACTIVE" },
) {
  if (!hasPermission(actor.role, "users.manage")) {
    throw new AdminAccessError("Sem permissão para administrar usuários.");
  }
  if (actor.id === id) {
    throw new AdminAccessError(
      "Seu próprio perfil de administrador é protegido contra bloqueio.",
      400,
    );
  }

  const db = await getDb();
  const [target] = await db.select().from(users).where(eq(users.id, id)).limit(1);
  if (!target) throw new AdminAccessError("Usuário não encontrado.", 404);

  const nextRole =
    input.role === undefined
      ? asRole(target.role)
      : isRole(input.role)
        ? input.role
        : null;
  if (!nextRole) throw new AdminAccessError("Perfil de acesso inválido.", 400);

  const nextStatus =
    input.status === undefined
      ? target.status
      : input.status === "ACTIVE" || input.status === "INACTIVE"
        ? input.status
        : null;
  if (!nextStatus) throw new AdminAccessError("Status inválido.", 400);

  const [updated] = await db
    .update(users)
    .set({
      role: nextRole,
      status: nextStatus,
      updatedAt: new Date().toISOString(),
    })
    .where(eq(users.id, id))
    .returning();

  await recordAudit(
    actor,
    "ALTERAR",
    "USUÁRIOS",
    target.email,
    `Perfil: ${roleDefinitions[nextRole].label}; status: ${
      nextStatus === "ACTIVE" ? "ativo" : "inativo"
    }.`,
  );
  return userDto(updated);
}

function safeMediaUrl(value: string) {
  const url = value.trim();
  if (url.startsWith("/media/")) return url;
  try {
    const parsed = new URL(url);
    if (parsed.protocol === "https:" || parsed.protocol === "http:") return url;
  } catch {
    // A mensagem de validação é emitida abaixo.
  }
  throw new AdminAccessError(
    "Use uma URL http(s) ou um arquivo dentro de /public/media.",
    400,
  );
}

export async function createMedia(
  actor: Actor,
  input: {
    title: string;
    description?: string;
    url: string;
    thumbnailUrl?: string;
    mediaType?: string;
    status?: "PUBLISHED" | "DRAFT";
    featured?: boolean;
  },
) {
  if (!hasPermission(actor.role, "media.manage")) {
    throw new AdminAccessError("Sem permissão para administrar vídeos.");
  }
  const title = input.title.trim();
  if (title.length < 3) {
    throw new AdminAccessError("Informe o título do vídeo.", 400);
  }

  const url = safeMediaUrl(input.url);
  const thumbnailUrl = input.thumbnailUrl?.trim()
    ? safeMediaUrl(input.thumbnailUrl)
    : "";
  const status = input.status === "DRAFT" ? "DRAFT" : "PUBLISHED";
  const db = await getDb();
  const [created] = await db
    .insert(mediaItems)
    .values({
      title,
      description: input.description?.trim() ?? "",
      url,
      thumbnailUrl,
      mediaType: input.mediaType?.trim() || "DOCUMENTARY",
      provider: detectMediaProvider(url),
      status,
      featured: Boolean(input.featured),
      createdBy: actor.id,
    })
    .returning();

  await recordAudit(
    actor,
    "PUBLICAR",
    "MÍDIA",
    title,
    `Vídeo ${status === "PUBLISHED" ? "publicado" : "salvo como rascunho"}.`,
  );
  return mediaDto(created);
}

export async function deleteMedia(actor: Actor, id: number) {
  if (!hasPermission(actor.role, "media.manage")) {
    throw new AdminAccessError("Sem permissão para administrar vídeos.");
  }
  const db = await getDb();
  const [target] = await db
    .select()
    .from(mediaItems)
    .where(eq(mediaItems.id, id))
    .limit(1);
  if (!target) throw new AdminAccessError("Vídeo não encontrado.", 404);

  await db.delete(mediaItems).where(eq(mediaItems.id, id));
  await recordAudit(
    actor,
    "EXCLUIR",
    "MÍDIA",
    target.title,
    "Vídeo removido da página Sobre nós.",
  );
}

export async function updateSettings(
  actor: Actor,
  input: Record<string, string>,
) {
  if (!hasPermission(actor.role, "content.manage")) {
    throw new AdminAccessError("Sem permissão para editar o conteúdo.");
  }
  const allowedKeys = new Set([
    "hero_media_type",
    "hero_image_url",
    "hero_video_url",
    "logo_url",
    "page_background_url",
    "store_products",
    "payment_pix_enabled",
    "payment_pix_key",
    "payment_credit_enabled",
    "payment_credit_url",
    "payment_debit_enabled",
    "payment_debit_url",
    "payment_boleto_enabled",
    "payment_boleto_url",
  ]);
  const entries = Object.entries(input).filter(([key]) => allowedKeys.has(key));
  if (!entries.length) {
    throw new AdminAccessError("Nenhuma configuração válida foi enviada.", 400);
  }

  for (const [key, rawValue] of entries) {
    const value = rawValue.trim();
    if (
      (key === "hero_image_url" ||
        key === "hero_video_url" ||
        key === "logo_url" ||
        key === "page_background_url") &&
      value &&
      !value.startsWith("/media/")
    ) {
      safeMediaUrl(value);
    }
  }

  const db = await getDb();
  for (const [key, value] of entries) {
    await db
      .insert(siteSettings)
      .values({ key, value: value.trim(), updatedBy: actor.id })
      .onConflictDoUpdate({
        target: siteSettings.key,
        set: {
          value: value.trim(),
          updatedBy: actor.id,
          updatedAt: new Date().toISOString(),
        },
      });
  }

  await recordAudit(
    actor,
    "ALTERAR",
    "CONTEÚDO",
    entries.some(([key]) => key.startsWith("payment_") || key === "store_products")
      ? "Loja e pagamentos"
      : "Identidade visual",
    `Configurações atualizadas: ${entries.map(([key]) => key).join(", ")}.`,
  );
}

export async function getPublicSettings(): Promise<Record<string, string>> {
  try {
    const db = await getDb();
    const rows = await db.select().from(siteSettings);
    return Object.fromEntries(rows.map((row) => [row.key, row.value]));
  } catch {
    return {};
  }
}

export async function getPublishedMedia(): Promise<MediaItemDto[]> {
  try {
    const db = await getDb();
    const rows = await db
      .select()
      .from(mediaItems)
      .where(eq(mediaItems.status, "PUBLISHED"))
      .orderBy(desc(mediaItems.featured), desc(mediaItems.createdAt));
    return rows.map(mediaDto);
  } catch {
    return [];
  }
}

export function detectMediaProvider(url: string) {
  const lower = url.toLowerCase();
  if (lower.includes("youtube.com") || lower.includes("youtu.be")) {
    return "YOUTUBE";
  }
  if (lower.includes("vimeo.com")) return "VIMEO";
  if (
    lower.endsWith(".mp4") ||
    lower.endsWith(".webm") ||
    lower.startsWith("/media/")
  ) {
    return "DIRECT";
  }
  return "EXTERNAL";
}
