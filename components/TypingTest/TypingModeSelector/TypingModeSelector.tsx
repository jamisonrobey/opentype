import { useTypingMode } from "./TypingModeContext";
import { WordsTimeQuote } from "./types";
import { WordsTimeQuoteSelector } from "./selectors/WordsTimeQuoteSelector";
import { PunctuationNumbersSelector } from "./selectors/PunctuationNumbersSelector";
import { getDefaultLengthForMode } from "@/utils/getDefaultLength";
import { LengthSelector } from "./selectors/LengthSelector";

export const TypingModeSelector = () => {
  const {
    selectedWordsTimeQuote,
    setSelectedPunctuationNumbers,
    setSelectedWordsTimeQuote,
    setSelectedLength,
    showPunctuationNumbers,
    setShowPunctuationNumbers,
  } = useTypingMode();

  const handleWordsTimeQuoteChange = (selected: WordsTimeQuote) => {
    setSelectedWordsTimeQuote(selected);
    setSelectedLength(getDefaultLengthForMode(selected));

    if (selected === "quote") {
      setShowPunctuationNumbers(false);
      setSelectedPunctuationNumbers([]);
    } else {
      setShowPunctuationNumbers(true);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div
        className={`flex p-4 sm:px-1 text-xs transition-all duration-75 items-center justify-evenly w-8/10 2xl:w-3/7 rounded-lg bg-[var(--bgDark-color)]`}
      >
        <div
          className={`${
            showPunctuationNumbers ? "flex-grow" : "flex-grow-0 w-0 opacity-0"
          } transition-all duration-300 ease-linear transition-width `}
        >
          <PunctuationNumbersSelector />
        </div>
        <div
          className={`${
            showPunctuationNumbers ? "" : "opacity-0"
          }w-[3px] mx-4 bg-[var(--darkAccent-color)] h-2/3`}
        ></div>
        <div
          className={`${
            showPunctuationNumbers ? "w-[3]px]" : "w-0"
          } bg-[var(--darkAccent-color)] h-2/3 duration-300 transition-all ease-linear transition-width delay-200`}
        ></div>
        <div className="flex-grow transition-spacing duration-300 ease-linear">
          <WordsTimeQuoteSelector onChange={handleWordsTimeQuoteChange} />
        </div>
        <div className="w-[3px] mx-4 bg-[var(--darkAccent-color)] h-2/3"></div>
        <div className="flex-grow transition-all duration-300 ease-linear">
          <LengthSelector />
        </div>
      </div>
    </div>
  );
};
