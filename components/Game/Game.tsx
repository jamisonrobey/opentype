import { useRef, useEffect, useState } from "react";
import { useGameContext } from "./context/GameContext";
import { Timer } from "./Timer";

export const Game: React.FC = () => {
  const { words, userInput, typedWords, handleInputChange } = useGameContext();

  const cursorRef = useRef<HTMLSpanElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });

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

  useEffect(() => {
    requestAnimationFrame(() => {
      cursorRef.current?.style.setProperty("left", `${cursorPosition.left}px`);
      cursorRef.current?.style.setProperty("top", `${cursorPosition.top}px`);
    });
  }, [cursorPosition]);

  return (
    <div className="w-3/4">
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
          ref={cursorRef}
          className="border-r border-r-[var(--accent-color)] h-[1.5em] absolute transition-all ease-linear duration-[0.05s]"
        />
      </div>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
      />
    </div>
  );
};
