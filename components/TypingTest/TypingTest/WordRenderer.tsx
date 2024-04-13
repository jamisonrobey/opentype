"use client";
import { useEffect, useState, useRef } from "react";
import { useTypingTest } from "../context/TypingTestContext";

export const WordRenderer = () => {
  const { words, setWords, resetTest } = useTypingTest();
  const [typedWords, setTypedWords] = useState<string[]>([]);
  const [userInput, setUserInput] = useState("");
  const [fadeClass, setFadeClass] = useState("");

  const testFetch = () => {
    setFadeClass("opacity-0 transition-all duration-1000");
    fetch("/api/words?lang=english-1k&numWords=500")
      .then((res) => res.json())
      .then((res) => {
        setTimeout(() => {
          setWords(res.words);
          setFadeClass("opacity-100 transition-all ease-linear duration-1000");
        }, 200);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const currentWord = words[typedWords.length];
    if (value.endsWith(" ")) {
      setTypedWords((prev) => [...prev, value]);
      setUserInput("");
    } else {
      setUserInput(value);
    }
  };
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
    <div className="flex flex-col justify-evenly flex-grow items-center">
      <div
        className={`text-4xl w-3/4 mb-4 h-44 space-y-4 overflow-auto no-scrollbar relative ${fadeClass}`}
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
      <input value={userInput} onChange={handleInputChange} className="w-3/4" />
      <button onClick={testFetch}>Get new words test</button>
    </div>
  );
};
