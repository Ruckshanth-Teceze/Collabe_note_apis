import { relations } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["OWNER", "EDITOR", "VIEWER"]);
export const notePermissionRoleEnum = pgEnum("note_permission_role", [
  "OWNER",
  "EDITOR",
  "VIEWER",
]);

export const users = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    passwordHash: text("password_hash").notNull(),
    name: varchar("name", { length: 255 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("users_email_idx").on(table.email),
    index("users_created_at_idx").on(table.createdAt),
  ],
);

export const notes = pgTable(
  "notes",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    title: varchar("title", { length: 500 }).notNull().default("Untitled"),
    content: text("content"),
    ownerId: uuid("owner_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    currentVersion: integer("current_version").notNull().default(1),
    isDeleted: boolean("is_deleted").notNull().default(false),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("notes_owner_id_idx").on(table.ownerId),
    index("notes_updated_at_idx").on(table.updatedAt),
    index("notes_is_deleted_idx").on(table.isDeleted),
  ],
);

export const permissions = pgTable(
  "permissions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    noteId: uuid("note_id")
      .notNull()
      .references(() => notes.id, { onDelete: "cascade" }),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    role: notePermissionRoleEnum("role").notNull().default("VIEWER"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("permissions_note_user_idx").on(table.noteId, table.userId),
    index("permissions_user_id_idx").on(table.userId),
    index("permissions_note_id_idx").on(table.noteId),
  ],
);

export const noteVersions = pgTable(
  "note_versions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    noteId: uuid("note_id")
      .notNull()
      .references(() => notes.id, { onDelete: "cascade" }),
    title: varchar("title", { length: 500 }).notNull(),
    content: text("content"),
    version: integer("version").notNull(),
    createdBy: uuid("created_by")
      .notNull()
      .references(() => users.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("note_versions_note_id_idx").on(table.noteId),
    index("note_versions_version_idx").on(table.noteId, table.version),
    index("note_versions_created_at_idx").on(table.createdAt),
  ],
);

export const attachments = pgTable(
  "attachments",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    noteId: uuid("note_id")
      .notNull()
      .references(() => notes.id, { onDelete: "cascade" }),
    filename: varchar("filename", { length: 500 }).notNull(),
    mimeType: varchar("mime_type", { length: 100 }).notNull(),
    size: integer("size").notNull(),
    uploadedBy: uuid("uploaded_by")
      .notNull()
      .references(() => users.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("attachments_note_id_idx").on(table.noteId),
    index("attachments_uploaded_by_idx").on(table.uploadedBy),
  ],
);

export const usersRelations = relations(users, ({ many }) => ({
  notes: many(notes),
  permissions: many(permissions),
  noteVersions: many(noteVersions),
  uploadedAttachments: many(attachments),
}));

export const notesRelations = relations(notes, ({ one, many }) => ({
  owner: one(users, {
    fields: [notes.ownerId],
    references: [users.id],
  }),
  permissions: many(permissions),
  versions: many(noteVersions),
  attachments: many(attachments),
}));

export const permissionsRelations = relations(permissions, ({ one }) => ({
  note: one(notes, {
    fields: [permissions.noteId],
    references: [notes.id],
  }),
  user: one(users, {
    fields: [permissions.userId],
    references: [users.id],
  }),
}));

export const noteVersionsRelations = relations(noteVersions, ({ one }) => ({
  note: one(notes, {
    fields: [noteVersions.noteId],
    references: [notes.id],
  }),
  creator: one(users, {
    fields: [noteVersions.createdBy],
    references: [users.id],
  }),
}));

export const attachmentsRelations = relations(attachments, ({ one }) => ({
  note: one(notes, {
    fields: [attachments.noteId],
    references: [notes.id],
  }),
  uploader: one(users, {
    fields: [attachments.uploadedBy],
    references: [users.id],
  }),
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export type Note = typeof notes.$inferSelect;
export type NewNote = typeof notes.$inferInsert;

export type Permission = typeof permissions.$inferSelect;
export type NewPermission = typeof permissions.$inferInsert;

export type NoteVersion = typeof noteVersions.$inferSelect;
export type NewNoteVersion = typeof noteVersions.$inferInsert;

export type Attachment = typeof attachments.$inferSelect;
export type NewAttachment = typeof attachments.$inferInsert;

export type Role = "OWNER" | "EDITOR" | "VIEWER";
