"use client";
import { useEffect, useState, useRef } from "react";
import { useTypingTest } from "../context/TypingTestContext";
import { InputHandler } from "./InputHandler";
export const WordRenderer = () => {
  const { words, typedWords, fadeClass, userInput } = useTypingTest();

  const getCursorStyling = (wordIndex: number, charIndex: number) => {
    if (typedWords.length != wordIndex) return;
    if (charIndex == userInput.length) {
      return "border-l border-l-[var(--accent-color)] ";
    } else if (
      charIndex == words[wordIndex].length - 1 &&
      userInput.length > charIndex
    ) {
      return "border-r border-r-[var(--accent-color)] ";
    }
  };

  const getCharacterStyling = (
    wordIndex: number,
    charIndex: number,
    char: string
  ) => {
    if (wordIndex < typedWords.length) {
      return typedWords[wordIndex][charIndex] === char
        ? "text-[var(--title-color)]"
        : "text-red-500";
    } else if (
      wordIndex === typedWords.length &&
      charIndex < userInput.length
    ) {
      return userInput[charIndex] === char
        ? "text-[var(--title-color)]"
        : "text-red-500";
    } else {
      return "text-[var(--text-color)]";
    }
  };
  return (
    <div
      className={`${fadeClass} text-3xl w-4/6 mb-4 h-44 space-y-4 overflow-auto no-scrollbar relative `}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className={`inline-block mr-6 `}>
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className={`${getCursorStyling(
                wordIndex,
                charIndex
              )} ${getCharacterStyling(wordIndex, charIndex, char)}`}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};
