import type { Permission, Role } from "./access-control";

export type AdminUserDto = {
  id: number;
  email: string;
  name: string;
  role: Role;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
  updatedAt: string;
};

export type AuditLogDto = {
  id: number;
  actorEmail: string;
  actorName: string;
  actorRole: Role;
  action: string;
  area: string;
  target: string;
  details: string;
  createdAt: string;
};

export type MediaItemDto = {
  id: number;
  title: string;
  description: string;
  mediaType: string;
  provider: string;
  url: string;
  thumbnailUrl: string;
  status: "PUBLISHED" | "DRAFT";
  featured: boolean;
  createdAt: string;
  updatedAt: string;
};

export type AdminState = {
  currentUser: AdminUserDto & { permissions: Permission[] };
  users: AdminUserDto[];
  auditLogs: AuditLogDto[];
  mediaItems: MediaItemDto[];
  settings: Record<string, string>;
};

