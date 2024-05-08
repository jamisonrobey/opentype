import { getDefaultLengthForMode } from "@/utils/getDefaultDuration";
import { TypingTestProvider } from "../context/TypingTestProvider";
import { LanguageOptions } from "../LangageSelector/languages";
import { IncludePuncNums } from "./types";
import { db } from "@/lib/db";
import { sql } from "drizzle-orm";
import { Test } from "./Test";
import { english1k } from "@/lib/schema";
import { ModeSelector } from "../ModeSelector/ModeSelector";
const initialGameMode = "time";
const initialPuncNums: IncludePuncNums = [];
export const TestContainer = async ({}) => {
  const duration = getDefaultLengthForMode(initialGameMode);
  const wordsQueryResult = await db
    .select({ words: english1k })
    .from(english1k)
    .orderBy(sql`RANDOM()`)
    .limit(50);
  const words = await wordsQueryResult.map((row) => row.words.word);

  return (
    <TypingTestProvider
      initialGameMode={initialGameMode}
      initialDuration={duration}
      initialPuncNums={initialPuncNums}
      initialWords={words}
    >
      <ModeSelector />
      <Test />
    </TypingTestProvider>
  );
};
