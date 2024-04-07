import { TypingTestProvider } from "./context/TypingTestProvider";
import { englishWords1kTable } from "@/lib/schema";
import { getRandomWords } from "@/lib/words/getTopWords";
import { ModeSelector } from "../ModeSelector/ModeSelector";
import { Language, Duration } from "./types";
import { TestBody } from "./TestBody";
export const TypingTest = async () => {
  const words = await getRandomWords(englishWords1kTable, 50);
  return (
    <TypingTestProvider
      initialWords={words as string[]}
      initialGameMode="time"
      initialPuncNums={[]}
      initialDuration={30}
      initialLanguage={Language.English1k}
    >
      <ModeSelector />
      <TestBody />
    </TypingTestProvider>
  );
};
