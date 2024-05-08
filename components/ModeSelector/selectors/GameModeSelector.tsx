import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { GameMode } from "@/components/TypingTest/types";
import { TextIcon, CountdownTimerIcon, QuoteIcon } from "@radix-ui/react-icons";
import { useTypingTest } from "@/components/context/TypingTestContext";
import { getDefaultLengthForMode } from "@/utils/getDefaultDuration";
export const WordsTimeQuoteSelector = () => {
  const { gameMode, fadeTextOut, fadeTextIn, duration, setGameMode, language } =
    useTypingTest();

  const handleChange = (value: GameMode) => {
    setGameMode(value);
    fadeTextOut();
    if (value === "quote") {
      fetch("/api/getQuotes?duration=short")
        .then((res) => res.json())
        .then((json) => json.words)
        .then((words) => {
          fadeTextIn(words);
        });
    } else if (value === "words") {
      fetch(
        `/api/getWords?gameMode=${value}&duration=${10}&{gameMode}&language=${
          language.language
        }`
      )
        .then((res) => res.json())
        .then((json) => json.words)
        .then((text) => fadeTextIn(text));
    } else {
      fetch(`/api/getWords?gameMode=${value}&language=${language.language}`)
        .then((res) => res.json())
        .then((json) => json.words)
        .then((text) => fadeTextIn(text));
    }
  };

  return (
    <ToggleGroup.Root
      className="flex flex-col sm:flex-row items-center justify-evenly space-y-2 sm:space-y-0 sm:space-x-4"
      aria-label="Mode"
      type="single"
      value={gameMode}
      onValueChange={handleChange}
    >
      <ToggleGroup.Item
        className="sm:px-4 sm:y-2 z-10 hover:text-[var(--title-color)] data-[state='on']:text-[var(--accent-color)] duration-75 flex items-center space-x-2"
        value="words"
        disabled={gameMode === "words"}
      >
        <TextIcon className="mb-0.5 w-4 h-4" />
        <p>words</p>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="sm:px-4 sm:py-2 z-10 hover:text-[var(--title-color)] data-[state='on']:text-[var(--accent-color)] duration-75 flex items-center space-x-2"
        value="time"
        disabled={gameMode === "time"}
      >
        <CountdownTimerIcon className="mb-0.5 w-4 h-4" />
        <p>time</p>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="sm:px-4 sm:py-2  z-10 hover:text-[var(--title-color)] data-[state='on']:text-[var(--accent-color)] duration-75 flex items-center space-x-2"
        value="quote"
        disabled={gameMode === "quote"}
      >
        <QuoteIcon className="mb-0.5 w-4 h-4" />
        <p>quote</p>
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};
