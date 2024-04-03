import { sql } from "drizzle-orm";
import { PgTable } from "drizzle-orm/pg-core";
import { db } from "../db";

export const getRandomWords = async <T extends PgTable>(
  table: T,
  numWords: number
) => {
  const words = await db
    .select({
      word: table,
    })
    .from(table)
    .orderBy(sql`RANDOM()`)
    .limit(numWords);
  /* @ts-ignore*/
  return words.map(({ word }) => word.word);
};
