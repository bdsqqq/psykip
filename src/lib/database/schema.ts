import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const userTable = sqliteTable("user", {
    id: text("id").primaryKey(),
    email: text("email").unique().notNull(),
})

export const magicLinkTable = sqliteTable("magic_link", {
    id: text("id").primaryKey(),
    userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
    token: text("token").notNull(),
})

export const sessionTable = sqliteTable("session", {
    id: text("id").primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => userTable.id),
    expiresAt: integer("expires_at").notNull(),
})

