import { getDefaultLengthForMode } from "@/utils/getDefaultDuration";
import { TypingTestProvider } from "../context/TypingTestProvider";
import { IncludePuncNums } from "./types";
import { db } from "@/lib/db";
import { sql } from "drizzle-orm";
import { englishWords1kTable } from "@/lib/schema";
import { TypingTestContainer } from "./TypingTestContainer";
import { ModeSelector } from "../ModeSelector/ModeSelector";
const initialGameMode = "time";
const initialPuncNums: IncludePuncNums = [];
const initialLanguage = "english-1k";

export const TypingTest = async ({}) => {
  const duration = getDefaultLengthForMode(initialGameMode);
  const wordsQueryResult = await db
    .select({ words: englishWords1kTable })
    .from(englishWords1kTable)
    .orderBy(sql`RANDOM()`)
    .limit(50);
  const words = await wordsQueryResult.map((row) => row.words.word);

  return (
    <TypingTestProvider
      initialGameMode={initialGameMode}
      initialDuration={duration}
      initialLanguage={initialLanguage}
      initialPuncNums={initialPuncNums}
      initialWords={words}
    >
      <ModeSelector />
      <TypingTestContainer />
    </TypingTestProvider>
  );
};
