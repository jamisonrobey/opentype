import { getDefaultLengthForMode } from "@/utils/getDefaultDuration";
import { ModeSelector } from "../ModeSelector/ModeSelector";
import { TypingTestProvider } from "../context/TypingTestProvider";
import { GameMode, IncludePuncNums, Language } from "../types";
import { db } from "@/lib/db";
import { switchLangForTable } from "@/utils/switchLangForTable";
import { sql } from "drizzle-orm";
import { WordRenderer } from "./WordRenderer";
interface TypingTestProps {
  initialGameMode: GameMode;
  initialPuncNums: IncludePuncNums;
  initialLanguage: Language;
}

export const TypingTest = async ({
  initialGameMode,
  initialPuncNums,
  initialLanguage,
}: TypingTestProps) => {
  const duration = getDefaultLengthForMode(initialGameMode);
  let words: string[] = [];
  const table = switchLangForTable(initialLanguage);

  if (initialGameMode == "quote") {
  } else {
    const table = switchLangForTable(initialLanguage);
    if (initialGameMode == "words") {
      const wordsQueryResult = await db
        .select({ words: table })
        .from(table)
        .orderBy(sql`RANDOM()`)
        .limit(duration);
      words = await wordsQueryResult.map((row) => row.words.word);
    } else {
      const wordsQueryResult = await db
        .select({ words: table })
        .from(table)
        .orderBy(sql`RANDOM()`)
        .limit(50);
      words = await wordsQueryResult.map((row) => row.words.word);
    }
  }

  return (
    <TypingTestProvider
      initialGameMode={initialGameMode}
      initialDuration={duration}
      initialLanguage={initialLanguage}
      initialPuncNums={initialPuncNums}
    >
      <ModeSelector />
      <WordRenderer initialWords={words} />
    </TypingTestProvider>
  );
};
