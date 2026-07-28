export const permissions = [
  "dashboard.view",
  "content.manage",
  "ministries.manage",
  "events.manage",
  "store.manage",
  "media.manage",
  "people.view",
  "people.manage",
  "attendance.manage",
  "reports.view",
  "users.manage",
] as const;

export type Permission = (typeof permissions)[number];

export const roleDefinitions = {
  ADMINISTRADOR: {
    label: "Administrador",
    description: "Controle total do site, usuários, permissões e auditoria.",
    permissions: [...permissions],
  },
  PASTORAL: {
    label: "Pastoral",
    description: "Acompanha pessoas, conteúdos, ministérios e relatórios.",
    permissions: [
      "dashboard.view",
      "content.manage",
      "ministries.manage",
      "events.manage",
      "store.manage",
      "media.manage",
      "people.view",
      "reports.view",
    ],
  },
  SECRETARIA: {
    label: "Secretaria",
    description: "Gerencia cadastros, eventos, frequências e relatórios.",
    permissions: [
      "dashboard.view",
      "content.manage",
      "events.manage",
      "store.manage",
      "people.view",
      "people.manage",
      "attendance.manage",
      "reports.view",
    ],
  },
  LIDER_MINISTERIO: {
    label: "Líder de ministério",
    description: "Atualiza informações e mídia dos ministérios.",
    permissions: [
      "dashboard.view",
      "ministries.manage",
      "media.manage",
      "people.view",
    ],
  },
  LIDER_CELULA: {
    label: "Líder de célula",
    description: "Acompanha sua célula, pessoas e frequências.",
    permissions: [
      "dashboard.view",
      "people.view",
      "attendance.manage",
    ],
  },
  MIDIA: {
    label: "Mídia",
    description: "Publica fotos, vídeos, documentários e conteúdo visual.",
    permissions: [
      "dashboard.view",
      "content.manage",
      "media.manage",
    ],
  },
  LEITURA: {
    label: "Somente leitura",
    description: "Consulta informações e relatórios autorizados, sem editar.",
    permissions: ["dashboard.view", "people.view", "reports.view"],
  },
} satisfies Record<
  string,
  {
    label: string;
    description: string;
    permissions: Permission[];
  }
>;

export type Role = keyof typeof roleDefinitions;

export function isRole(value: unknown): value is Role {
  return typeof value === "string" && value in roleDefinitions;
}

export function hasPermission(role: Role, permission: Permission) {
  return (roleDefinitions[role].permissions as readonly Permission[]).includes(
    permission,
  );
}
