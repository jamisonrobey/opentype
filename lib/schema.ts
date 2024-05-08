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

export const english1k = pgTable("english_1k", {
  rank: integer("rank").primaryKey(),
  word: text("word").notNull(),
});

export const english5k = pgTable("english_5k", {
  rank: integer("rank").primaryKey(),
  word: text("word").notNull(),
});

export const english10k = pgTable("english_10k", {
  rank: integer("rank").primaryKey(),
  word: text("word").notNull(),
});

export const english25k = pgTable("english_25k", {
  rank: integer("rank").primaryKey(),
  word: text("word").notNull(),
});

export const english450k = pgTable("english_450k", {
  rank: integer("rank").primaryKey(),
  word: text("word").notNull(),
});

export const esperanto1k = pgTable("esperanto_1k", {
  rank: integer("rank").primaryKey(),
  word: text("word").notNull(),
});

export const esperanto10k = pgTable("esperanto_10k", {
  rank: integer("rank").primaryKey(),
  word: text("word").notNull(),
});

export const esperanto25k = pgTable("esperanto_25k", {
  rank: integer("rank").primaryKey(),
  word: text("word").notNull(),
});

export const filipino1k = pgTable("filipino_1k", {
  rank: integer("rank").primaryKey(),
  word: text("word").notNull(),
});

export const hindi1k = pgTable("hindi_1k", {
  rank: integer("rank").primaryKey(),
  word: text("word").notNull(),
});

export const indonesian1k = pgTable("indonesian_1k", {
  rank: integer("rank").primaryKey(),
  word: text("word").notNull(),
});

export const indonesian10k = pgTable("indonesian_10k", {
  rank: integer("rank").primaryKey(),
  word: text("word").notNull(),
});

export const spanish1k = pgTable("spanish_1k", {
  rank: integer("rank").primaryKey(),
  word: text("word").notNull(),
});

export const spanish10k = pgTable("spanish_10k", {
  rank: integer("rank").primaryKey(),
  word: text("word").notNull(),
});
