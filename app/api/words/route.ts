import { db } from "@/lib/db";
import { sql } from "drizzle-orm";
import { Language } from "@/components/TypingTest/types";
import { GameMode } from "@/components/TypingTest/types";
import {
  englishWords10kTable,
  englishWords1kTable,
  englishWords5kTable,
} from "@/lib/schema";
import { PgTable } from "drizzle-orm/pg-core";

const getRandomWords = async (lang: Language, numWords: string) => {
  const table = getTableForLang(lang);
  const words = await db
    .select({
      word: table,
    })
    .from(table)
    .orderBy(sql`RANDOM()`)
    .limit(parseInt(numWords));
  /* @ts-ignore*/ // this me being lazy I just want one function for all my tables
  return words.map(({ word }) => word.word);
};

const getTableForLang = (lang: Language): PgTable => {
  switch (lang) {
    case Language.English1k:
      return englishWords1kTable;
    case Language.English5k:
      return englishWords5kTable;
    case Language.English10k:
      return englishWords10kTable;
    default:
      return englishWords1kTable;
  }
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const numWords = searchParams.get("numWords") as string;
  const mode = searchParams.get("mode");
  const lang = searchParams.get("lang") as Language;
  try {
    const words = await getRandomWords(lang, numWords);
    return Response.json({ words }, { status: 200 });
  } catch (err) {
    return Response.json(
      {},
      { status: 500, statusText: "Internal Server Error" }
    );
  }
}
