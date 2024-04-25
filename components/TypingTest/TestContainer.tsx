import { getDefaultLengthForMode } from "@/utils/getDefaultDuration";
import { TypingTestProvider } from "../context/TypingTestProvider";
import { IncludePuncNums } from "./types";
import { db } from "@/lib/db";
import { sql } from "drizzle-orm";
import { englishWords1kTable } from "@/lib/schema";
import { Test } from "./Test";
import { ModeSelector } from "../ModeSelector/ModeSelector";
import ThemeSwitch from "../ThemeSwitcher/ThemeSwitch";
const initialGameMode = "time";
const initialPuncNums: IncludePuncNums = [];
const initialLanguage = "english-1k";

export const TestContainer = async ({}) => {
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
      <Test />
      <ThemeSwitch />
    </TypingTestProvider>
  );
};
