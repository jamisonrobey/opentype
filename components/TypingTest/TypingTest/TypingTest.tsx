import { getDefaultLengthForMode } from "@/utils/getDefaultDuration";
import { ModeSelector } from "../ModeSelector/ModeSelector";
import { TypingTestProvider } from "../context/TypingTestProvider";
import { GameMode, IncludePuncNums, Language } from "../types";
import { db } from "@/lib/db";
import { switchLangForTable } from "@/utils/switchLangForTable";
import { sql } from "drizzle-orm";
import { WordRenderer } from "./WordRenderer";
import { englishWords1kTable } from "@/lib/schema";
// import { InputHandler } from "./InputHandler";

const initialGameMode = "time";
const initialPuncNums: IncludePuncNums = [];
const initialLanguage = "english-1k";

export const TypingTest = async ({}) => {
  const duration = getDefaultLengthForMode(initialGameMode);

  // DO some local storage maybe and save the selections

  // if (initialGameMode == "quote") {
  // } else {
  //   const table = switchLangForTable(initialLanguage);
  //   if (initialGameMode == "words") {
  //     const wordsQueryResult = await db
  //       .select({ words: table })
  //       .from(table)
  //       .orderBy(sql`RANDOM()`)
  //       .limit(duration);
  //     words = await wordsQueryResult.map((row) => row.words.word);
  //   } else {
  //     const wordsQueryResult = await db
  //       .select({ words: table })
  //       .from(table)
  //       .orderBy(sql`RANDOM()`)
  //       .limit(50);
  //     words = await wordsQueryResult.map((row) => row.words.word);
  //   }
  // }

  // for now hardcoded time is the default game mode
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
      <WordRenderer />
    </TypingTestProvider>
  );
};
