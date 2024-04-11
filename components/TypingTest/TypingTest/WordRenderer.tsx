"use client";
import { useEffect, useState } from "react";
import { useTypingTest } from "../context/TypingTestContext";

interface WordRendererProps {
  initialWords: string[];
}

export const WordRenderer = ({ initialWords }: WordRendererProps) => {
  const { words, setWords, userInput, typedWords } = useTypingTest();
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });
  setWords(initialWords);
  useEffect(() => {
    if (!words) return;

    const currentWordEl = document.getElementById(`word-${typedWords}`);
    const currentCharIndex = userInput.length;
    const currentWord = words[typedWords];

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
    <div className="text-2xl w-3/4 mb-4 h-24 overflow-auto no-scrollbar relative">
      {words
        ? words.map((word, index) => (
            <span className={`inline-block mr-6`}>{word}</span>
          ))
        : initialWords.map((word, index) => (
            <span className={`inline-block mr-6`}>{word}</span>
          ))}

      {words ? (
        <span
          className={`border-r border-r-[var(--accent-color)] h-[1.5em] absolute transition-all ease-linear duration-[0.1s]`}
          style={{
            left: `${cursorPosition.left}px`,
            top: `${cursorPosition.top}px`,
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
