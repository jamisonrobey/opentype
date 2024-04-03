"use client";
import { useEffect, useState } from "react";
import { useTypingTest } from "./context/TypingTestContext";
import { Timer } from "./Timer";

export const TestBody = () => {
  const {
    gameStarted,
    setGameStarted,
    setTypedWords,
    setUserInput,
    words,
    userInput,
    typedWords,
    resetTest,
  } = useTypingTest();

  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!gameStarted) {
      setGameStarted(true);
    }
    if (value.endsWith(" ")) {
      setTypedWords([...typedWords, value.trim()]);
      setUserInput("");
    } else {
      setUserInput(value);
    }
  };

  useEffect(() => {
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
  }, [userInput, typedWords, words]);

  return (
    <div className={`w-3/4 space-y-4`}>
      <Timer />
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
            {word.split("").map((char, charIndex) => (
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
            ))}
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
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        className="w-full"
      />
    </div>
  );
};
