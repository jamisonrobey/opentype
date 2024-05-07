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
  word: text("word").notNull(),
});

export const englishWords5kTable = pgTable("english_words_1k", {
  rank: integer("rank").primaryKey(),
  word: text("word").notNull(),
});

export const englishWords10kTable = pgTable("english_words_1k", {
  rank: integer("rank").primaryKey(),
  word: text("word").notNull(),
});

export const englishQuoteAll = pgTable("english_quotes_all", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  source: text("source").notNull(),
  length: integer("length").notNull(),
});

export const englishQuoteSmall = pgTable("english_quotes_small", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  source: text("source").notNull(),
  length: integer("length").notNull(),
});

export const englishQuoteMedium = pgTable("english_quotes_medium", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  source: text("source").notNull(),
  length: integer("length").notNull(),
});

export const englishQuoteLarge = pgTable("english_quotes_large", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  source: text("source").notNull(),
  length: integer("length").notNull(),
});

export const englishQuoteExtraLarge = pgTable("english_quotes_extra_large", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  source: text("source").notNull(),
  length: integer("length").notNull(),
});
