import { useMode } from "./context/ModeContext";
import { WordsTimeQuote } from "./types";
import { WordsTimeQuoteSelector } from "./selectors/WordsTimeQuoteSelector";
import { PunctuationNumbersSelector } from "./selectors/PunctuationNumbersSelector";
import { getDefaultLengthForMode } from "@/utils/getDefaultLength";
import { LengthSelector } from "./selectors/LengthSelector";

export const ModeSelector = () => {
  const {
    selectedWordsTimeQuote,
    setSelectedPunctuationNumbers,
    setSelectedWordsTimeQuote,
    setSelectedLength,
    showPunctuationNumbers,
    setShowPunctuationNumbers,
  } = useMode();

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
        className={`flex p-4 sm:px-4 text-xs items-center justify-evenly w-8/10 2xl:w-3/7 rounded-lg bg-[var(--bgDark-color)]`}
      >
        <div
          className={`${
            showPunctuationNumbers
              ? "flex-grow opacity-100 transition-opacity duration-200 ease-linear"
              : "flex-grow-0 opacity-0 transition-opacity duration-200 ease-linear"
          } ${
            showPunctuationNumbers
              ? "w-auto transition-width duration-300 ease-linear delay-200"
              : "w-0 transition-width duration-300 ease-linear"
          }`}
        >
          <PunctuationNumbersSelector />
        </div>
        <div
          className={`${
            showPunctuationNumbers
              ? "w-[3px] mx-4 bg-[var(--darkAccent-color)] h-2/3 transition-all duration-75 ease-linear"
              : "w-0 mx-0 bg-[var(--darkAccent-color)] h-2/3 transition-all duration-75 ease-linear"
          }`}
        ></div>
        <div className="flex-grow">
          <WordsTimeQuoteSelector onChange={handleWordsTimeQuoteChange} />
        </div>
        <div className="w-[3px] mx-4 bg-[var(--darkAccent-color)] h-2/3"></div>
        <div className="flex-grow">
          <LengthSelector />
        </div>
      </div>
    </div>
  );
};
