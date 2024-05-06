import { sql } from "drizzle-orm";
import { text, numeric, sqliteTable } from "drizzle-orm/sqlite-core";
import codes from "../data/codes";

export const bookmarksSchema = sqliteTable("bookmarks", {
    id: text("id").primaryKey(),
    chapterStart: numeric("chapterStart").notNull(),
    chapterEnd: numeric("chapterEnd").notNull(),
    text: text("text").notNull(),
    comment: text("comment").notNull(),
    translationCode: text("translatiionCode", {
        enum: codes
    }),
    lastUpdated: numeric("lastUpdated").notNull(),
    active: text("active", {
        enum: ["true", "false"]
    }).notNull(),
    userId: text("userId").notNull()
})