"use client";
import { useEffect, useState } from "react";
import { useTypingTest } from "../context/TypingTestContext";

interface WordRendererProps {
  initialWords: string[];
}

export const WordRenderer = ({ initialWords }: WordRendererProps) => {
  const { words, setWords, userInput, typedWords } = useTypingTest();
  setWords(initialWords);
  const getCursorStyling = (wordsIndex: number, chIndex: number) => {
    if (typedWords != wordsIndex) return;
    if (chIndex == userInput.length) {
      return "border-l border-l-[var(--accent-color)]";
    } else if (
      chIndex == words[wordsIndex].length - 1 &&
      userInput.length > chIndex
    ) {
      return "border-r border-r-[var(--accent-color)]";
    }
  };
  return (
    <div className="text-2xl w-3/4 mb-4 h-24 overflow-auto no-scrollbar relative">
      {words
        ? words.map((word, wordsIndex) => (
            <span key={wordsIndex} className={`inline-block mr-6 `}>
              <span>
                {word.split("").map((ch, chIndex) => (
                  <span className={`${getCursorStyling(wordsIndex, chIndex)}`}>
                    {ch}
                  </span>
                ))}
              </span>
            </span>
          ))
        : initialWords.map((word, index) => (
            <span key={index} className="inline-block mr-6">
              {word}
            </span>
          ))}
    </div>
  );
};
