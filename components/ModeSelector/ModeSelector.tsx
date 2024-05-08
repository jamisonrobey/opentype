"use client";
import { useState } from "react";
import { useTypingTest } from "../context/TypingTestContext";
import { GameMode } from "../TypingTest/types";
import { WordsTimeQuoteSelector } from "./selectors/GameModeSelector";
import { PunctuationNumbersSelector } from "./selectors/IncludePuncNumSelector";
import { getDefaultLengthForMode } from "@/utils/getDefaultDuration";
import { LengthSelector } from "./selectors/DurationSelector";
import { useEffect } from "react";
import { Gaegu } from "next/font/google";
interface WordsResponse {
  words: string[];
}

export const ModeSelector = () => {
  const { gameMode, setIncludePuncNums, gamePhase, setDuration, resetTest } =
    useTypingTest();

  const [showPunctuationNumbers, setShowPunctuationNumbers] = useState(true);

  useEffect(() => {
    setDuration(getDefaultLengthForMode(gameMode));
    resetTest();
    if (gameMode === "quote") {
      setShowPunctuationNumbers(false);
      setIncludePuncNums([]);
    } else {
      setShowPunctuationNumbers(true);
    }
  }, [gameMode]);

  return (
    <div
      className={`w-full mt-8 flex justify-center ${
        gamePhase == "over" ? "invisible" : "visible"
      }`}
    >
      <div
        className={`flex p-4 sm:px-4 text-xs items-center justify-evenly w-8/10 2xl:w-3/7 rounded-lg bg-[var(--bgDark-color)]`}
      >
        <div
          className={`${
            showPunctuationNumbers
              ? "flex-grow opacity-100 transition-opacity duration-1000 ease-linear"
              : "flex-grow-0 opacity-0 transition-opacity duration-1000 ease-linear"
          } ${
            showPunctuationNumbers
              ? "w-auto transition-width duration-1000 ease-linear delay-200"
              : "w-0 transition-width duration-1000 ease-linear"
          }`}
        >
          <PunctuationNumbersSelector />
        </div>
        <div
          className={`${
            showPunctuationNumbers
              ? "w-[3px] mx-4 bg-[var(--darkAccent-color)] h-2/3 transition-all duration-150 ease-linear"
              : "w-0 mx-0 bg-[var(--darkAccent-color)] h-2/3 transition-all duration-150 ease-linear"
          }`}
        ></div>
        <form className="flex-grow">
          <WordsTimeQuoteSelector />
        </form>
        <div className="w-[3px] mx-4 bg-[var(--darkAccent-color)] h-2/3"></div>
        <div className="flex-grow">
          <LengthSelector />
        </div>
      </div>
    </div>
  );
};
