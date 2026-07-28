import { sql } from "drizzle-orm";
import {
  index,
  integer,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const users = sqliteTable(
  "users",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    email: text("email").notNull(),
    name: text("name").notNull(),
    role: text("role").notNull().default("LEITURA"),
    status: text("status").notNull().default("ACTIVE"),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [
    uniqueIndex("users_email_unique").on(table.email),
    index("users_role_idx").on(table.role),
    index("users_status_idx").on(table.status),
  ],
);

export const auditLogs = sqliteTable(
  "audit_logs",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    actorUserId: integer("actor_user_id").references(() => users.id, {
      onDelete: "set null",
    }),
    actorEmail: text("actor_email").notNull(),
    actorName: text("actor_name").notNull(),
    actorRole: text("actor_role").notNull(),
    action: text("action").notNull(),
    area: text("area").notNull(),
    target: text("target").notNull(),
    details: text("details").notNull().default(""),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [
    index("audit_actor_idx").on(table.actorEmail),
    index("audit_area_idx").on(table.area),
    index("audit_created_at_idx").on(table.createdAt),
  ],
);

export const mediaItems = sqliteTable(
  "media_items",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    title: text("title").notNull(),
    description: text("description").notNull().default(""),
    mediaType: text("media_type").notNull().default("DOCUMENTARY"),
    provider: text("provider").notNull().default("EXTERNAL"),
    url: text("url").notNull(),
    thumbnailUrl: text("thumbnail_url").notNull().default(""),
    status: text("status").notNull().default("PUBLISHED"),
    featured: integer("featured", { mode: "boolean" }).notNull().default(false),
    createdBy: integer("created_by").references(() => users.id, {
      onDelete: "set null",
    }),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [
    index("media_status_idx").on(table.status),
    index("media_featured_idx").on(table.featured),
  ],
);

export const siteSettings = sqliteTable("site_settings", {
  key: text("key").primaryKey(),
  value: text("value").notNull(),
  updatedBy: integer("updated_by").references(() => users.id, {
    onDelete: "set null",
  }),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export type ChurchUser = typeof users.$inferSelect;
export type AuditLog = typeof auditLogs.$inferSelect;
export type MediaItem = typeof mediaItems.$inferSelect;
