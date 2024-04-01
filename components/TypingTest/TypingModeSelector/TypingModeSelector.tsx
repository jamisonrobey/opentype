"use client";
import { useState } from "react";
import { WordsTimeQuoteSelector } from "./WordsTimeQuoteSelector";
import { PunctuationNumbersSelector } from "./PunctuationNumbersSelector";
/*
Mode selector composed of different selectable options, which also effect the other selections that are available.
*/

// whether to include punctuation or numbers in text body, if quote mode then not selectable
export type PunctuationNumbers = "punctuation" | "numbers";
// mode of test, words (type amount of words), time (type until timer runs out), quote (type the quote)
export type WordsTimeQuote = "words" | "time" | "quote"; //

/* The various types of lengths corresponding to WordsTimeQuote */
type WordsLength = 10 | 25 | 50 | 100; // words (to type)
type TimeLength = 15 | 30 | 60 | 120; // seconds countdown
type QuoteLength = "short" | "medium" | "long"; // quote length (char)

export type Length = WordsLength | TimeLength | QuoteLength;

/* Handler for switching back to default lengths when we switch between modes */
const getDefaultLengthForMode = (mode: WordsTimeQuote) => {
  switch (mode) {
    case "words":
      return 10;
    case "time":
      return 15;
    case "quote":
      return 10;
    default:
      return 10;
  }
};

export const TypingModeSelector = () => {
  /*  Initial: no punctuation or numbers, words mode length 10*/
  const [selectedPunctuationNumbers, setSelectedPunctuationNumbers] = useState<
    PunctuationNumbers[]
  >([]);
  const [selectedWordsTimeQuote, setSelectedWordsTimeQuote] =
    useState<WordsTimeQuote>("words");
  const [selectedLength, setSelectedLength] = useState<Length>(10);

  const [showPunctuationNumbers, setShowPunctuationNumbers] = useState(true);

  const handlePunctuationNumbersChange = (selected: PunctuationNumbers[]) => {
    setSelectedPunctuationNumbers(selected);
  };

  const handleWordsTimeQuoteChange = (selected: WordsTimeQuote) => {
    setSelectedWordsTimeQuote(selected);
    // Reset selected length when switching between words, time, and quote
    setSelectedLength(getDefaultLengthForMode(selected));
    if (selected == "quote") {
      setShowPunctuationNumbers(false);
    } else {
      setShowPunctuationNumbers(true);
    }
  };

  const handleLengthChange = (
    selected: WordsLength | TimeLength | QuoteLength
  ) => {
    setSelectedLength(selected);
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
          <PunctuationNumbersSelector
            selectedOption={selectedWordsTimeQuote}
            onChange={handleWordsTimeQuoteChange}
          />
        </div>
        <div
          className={`${
            showPunctuationNumbers ? "w-[3px]" : "w-0"
          } mx-4 bg-[var(--darkAccent-color)] h-2/3 transition-spacing duration-300 ease-in-out`}
        ></div>
        <div className="flex-grow transition-spacing duration-300 ease-in-out">
          <WordsTimeQuoteSelector
            selectedOption={selectedWordsTimeQuote}
            onChange={handleWordsTimeQuoteChange}
          />
        </div>
        <div className="w-[3px] mx-4 bg-[var(--darkAccent-color)] h-2/3"></div>
        <div className="flex-grow transition-spacing duration-300 ease-in-out">
          <WordsTimeQuoteSelector
            selectedOption={selectedWordsTimeQuote}
            onChange={handleWordsTimeQuoteChange}
          />
        </div>
      </div>
    </div>
  );
};
