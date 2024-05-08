import { QuoteModeDuration } from "@/components/TypingTest/types";
import { sql } from "drizzle-orm";
import { db } from "@/lib/db";
import {
  englishQuoteAll,
  englishQuoteExtraLarge,
  englishQuoteLarge,
  englishQuoteMedium,
  englishQuoteSmall,
} from "@/lib/schema";
import { NextResponse } from "next/server";

const getTable = (duration: QuoteModeDuration) => {
  switch (duration) {
    case "all":
      return englishQuoteAll;
    case "short":
      return englishQuoteSmall;
    case "medium":
      return englishQuoteMedium;
    case "long":
      return englishQuoteLarge;
    case "thicc":
      return englishQuoteExtraLarge;
    default:
      return englishQuoteAll;
  }
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const duration = searchParams.get("duration") as QuoteModeDuration;
  const table = getTable(duration);
  try {
    const wordsResponse = await db
      .select({ text: table.text })
      .from(table)
      .orderBy(sql`RANDOM()`)
      .limit(1);

    const words = wordsResponse[0].text.split(" ");
    return Response.json({ words }, { status: 200 });
  } catch (err) {
    return Response.json(
      {},
      { status: 500, statusText: "Internal Server Error" }
    );
  }
}
