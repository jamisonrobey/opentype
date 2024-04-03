import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
  id: text("id").primaryKey(),
  githubId: integer("github_id").notNull().unique(),
  username: text("username").notNull(),
});

export const sessionTable = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
  }).notNull(),
});

export const englishWords1kTable = pgTable("english_words_1k", {
  rank: integer("rank").primaryKey(),
  word: text("word"),
});

export const englishWords5kTable = pgTable("english_words_1k", {
  rank: integer("rank").primaryKey(),
  word: text("word"),
});

export const englishWords10kTable = pgTable("english_words_1k", {
  rank: integer("rank").primaryKey(),
  word: text("word"),
});
