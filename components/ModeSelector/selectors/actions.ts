"use server";
import { Duration } from "@/components/TypingTest/types";
import { db } from "@/lib/db";
import { englishQuoteSmall } from "@/lib/schema";
import { eq } from "drizzle-orm";
export async function getQuote(duration: Duration) {
  const test = await db
    .select()
    .from(englishQuoteSmall)
    .where(eq(englishQuoteSmall.id, 1));
  return test;
}
