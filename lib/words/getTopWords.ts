import { sql } from "drizzle-orm";
import { PgTable } from "drizzle-orm/pg-core";
import { db } from "../db";

export const getRandomWords = async <T extends PgTable>(
  table: PgTable,
  numWords: number
) => {
  const words = await db
    .select({
      word: table,
    })
    .from(table)
    .orderBy(sql`RANDOM()`)
    .limit(numWords);
  /* @ts-ignore*/ // this me being lazy I just want one function for all my tables
  return words.map(({ word }) => word.word);
};
