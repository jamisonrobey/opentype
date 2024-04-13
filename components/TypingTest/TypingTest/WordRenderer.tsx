"use client";
import { useEffect, useState, useRef } from "react";
import { useTypingTest } from "../context/TypingTestContext";
import { InputHandler } from "./InputHandler";
export const WordRenderer = () => {
  const { words, typedWords, userInput, setWords, resetTest } = useTypingTest();
  const [fadeClass, setFadeClass] = useState("");

  const testFetch = () => {
    setFadeClass("opacity-0 transition-all ");
    fetch("/api/words?lang=english-1k&numWords=50")
      .then((res) => res.json())
      .then((res) => {
        setWords(res.words);
      });
    resetTest();
  };

  useEffect(() => {
    setTimeout(() => {
      setFadeClass("opacity-100 transition-all ");
    }, 300);
  }, [words]);

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
      className={`text-3xl w-4/6 mb-4 h-44 space-y-4 overflow-auto no-scrollbar relative ${fadeClass}`}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className={`inline-block mr-6 `}>
          <span>
            {word.split("").map((char, charIndex) => (
              <span
                className={`${getCursorStyling(
                  wordIndex,
                  charIndex
                )} ${getCharacterStyling(wordIndex, charIndex, char)}`}
              >
                {char}
              </span>
            ))}
          </span>
        </span>
      ))}
    </div>
  );
};
