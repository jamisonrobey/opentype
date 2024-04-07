"use client";
import { useTypingTest } from "../context/TypingTestContext";
import { useState, useEffect } from "react";

export const WordRenderer = () => {
  const { words, typedWords, userInput } = useTypingTest();
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const handleCursorPositioning = () => {
      const currentWordIndex = typedWords.length;
      const currentWordEl = document.getElementById(`word-${currentWordIndex}`);
      const currentCharIndex = userInput.length;
      const currentWord = words[currentWordIndex];

      if (currentWordEl) {
        currentWordEl.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }

      const charEl = currentWordEl?.children[
        currentCharIndex
      ] as HTMLElement | null;
      if (charEl) {
        const newPosition = {
          left: charEl.offsetLeft,
          top: charEl.offsetTop,
        };
        setCursorPosition(newPosition);
      } else if (currentCharIndex === currentWord.length) {
        const lastCharEl = currentWordEl?.lastChild as HTMLElement | null;
        if (lastCharEl) {
          const newPosition = {
            left: lastCharEl.offsetLeft + lastCharEl.offsetWidth,
            top: lastCharEl.offsetTop,
          };
          setCursorPosition(newPosition);
        }
      }
    };

    handleCursorPositioning();
  }, [userInput, typedWords, words]);

  return (
    <div className="text-2xl mb-4 h-24 overflow-auto no-scrollbar relative">
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          id={`word-${wordIndex}`}
          className={`inline-block mr-6 ${
            wordIndex < typedWords.length && word !== typedWords[wordIndex]
              ? "border-b border-b-red-500"
              : ""
          }`}
        >
          {typeof word === "string"
            ? word.split("").map((char, charIndex) => (
                <span
                  key={charIndex}
                  className={
                    wordIndex < typedWords.length
                      ? typedWords[wordIndex][charIndex] === char
                        ? "text-[var(--title-color)]"
                        : "text-red-500"
                      : wordIndex === typedWords.length &&
                        charIndex < userInput.length
                      ? userInput[charIndex] === char
                        ? "text-[var(--title-color)]"
                        : "text-red-500"
                      : "text-[var(--text-color)]"
                  }
                >
                  {char}
                </span>
              ))
            : null}
        </span>
      ))}
      <span
        className={`border-r border-r-[var(--accent-color)] h-[1.5em] absolute transition-all ease-linear duration-[0.1s]`}
        style={{
          left: `${cursorPosition.left}px`,
          top: `${cursorPosition.top}px`,
        }}
      />
    </div>
  );
};
