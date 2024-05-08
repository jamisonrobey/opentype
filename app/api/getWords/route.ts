import { PgTable } from "drizzle-orm/pg-core";
import {
  Duration,
  GameMode,
  Language,
  QuoteModeDuration,
  WordsModeDuration,
} from "@/components/TypingTest/types";
import { sql } from "drizzle-orm";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { LanguageOptions } from "@/components/LangageSelector/languages";
import { english1k } from "@/lib/schema";

const getTable = (languageName: string) => {
  LanguageOptions.map((lang) => {
    if (lang.language === languageName) return lang.table;
  });
  // default
  return english1k;
};

const getDuration = (duration: Duration, gameMode: GameMode) => {
  if (gameMode === "time") return 50;
  if (gameMode === "words") return duration as WordsModeDuration;
  // default
  return 1;
};
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const gameMode = searchParams.get("gameMode") as GameMode;
  const duration = searchParams.get("duration") as Duration;
  const language = searchParams.get("language") as string;
  const table = getTable(language);
  try {
    const wordsResponse = await db
      .select({ word: table.word })
      .from(table)
      .orderBy(sql`RANDOM()`)
      .limit(getDuration(duration, gameMode));

    const words = wordsResponse.map((wordResponse) => wordResponse.word);
    return Response.json({ words }, { status: 200 });
  } catch (err) {
    return Response.json(
      {},
      { status: 500, statusText: "Internal Server Error" }
    );
  }
}
