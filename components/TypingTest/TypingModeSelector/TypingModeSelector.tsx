import { useTypingMode } from "./TypingModeContext";
import { WordsTimeQuote } from "./types";
import { WordsTimeQuoteSelector } from "./selectors/WordsTimeQuoteSelector";
import { PunctuationNumbersSelector } from "./selectors/PunctuationNumbersSelector";
import { getDefaultLengthForMode } from "@/utils/getDefaultLength";
import { LengthSelector } from "./selectors/LengthSelector";

export const TypingModeSelector = () => {
  const {
    selectedWordsTimeQuote,
    setSelectedWordsTimeQuote,
    setSelectedLength,
    showPunctuationNumbers,
    setShowPunctuationNumbers,
  } = useTypingMode();

  const handleWordsTimeQuoteChange = (selected: WordsTimeQuote) => {
    setSelectedWordsTimeQuote(selected);
    setSelectedLength(getDefaultLengthForMode(selected));
    setShowPunctuationNumbers(selected !== "quote");
  };

  return (
    <div className="w-full flex justify-center">
      <div
        className={`flex p-2.5 text-xs items-center justify-evenly w-2/4 rounded-lg bg-[var(--bgDark-color)]`}
      >
        <div
          className={`${
            showPunctuationNumbers ? "flex-grow" : "flex-grow-0 w-0 opacity-0"
          } transition-spacing duration-300 ease-in-out`}
        >
          <PunctuationNumbersSelector />
        </div>
        <div
          className={`${
            showPunctuationNumbers ? "w-[3px]" : "w-0"
          } mx-4 bg-[var(--darkAccent-color)] h-2/3 transition-spacing duration-300 ease-in-out`}
        ></div>
        <div className="flex-grow transition-spacing duration-300 ease-in-out">
          <WordsTimeQuoteSelector onChange={handleWordsTimeQuoteChange} />
        </div>
        <div className="w-[3px] mx-4 bg-[var(--darkAccent-color)] h-2/3"></div>
        <div className="flex-grow transition-spacing duration-300 ease-in-out">
          <LengthSelector />
        </div>
      </div>
    </div>
  );
};
