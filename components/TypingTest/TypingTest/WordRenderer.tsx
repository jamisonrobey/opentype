"use client";
import { useEffect, useState } from "react";
import { useTypingTest } from "../context/TypingTestContext";

export const WordRenderer = () => {
  const { words, setWords } = useTypingTest();
  const [typedWords, setTypedWords] = useState<string[]>([]);
  const [userInput, setUserInput] = useState("");

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
      return "border-l border-l-[var(--accent-color)]";
    } else if (
      charIndex == words[wordIndex].length - 1 &&
      userInput.length > charIndex
    ) {
      return "border-r border-r-[var(--accent-color)]";
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
    <div className="flex flex-col justify-center items-center">
      <div className="text-2xl w-3/4 mb-4 h-24 overflow-auto no-scrollbar relative">
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
    </div>
  );
};
