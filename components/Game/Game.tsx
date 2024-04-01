import { useGameContext } from "./GameContext";
import { useEffect, useRef } from "react";

export const Game: React.FC = () => {
  const { words, userInput, handleInputChange, typedWords } = useGameContext();
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const currentWordIndex = typedWords.length;
    const currentWordElement = wordsRef.current[currentWordIndex];

    if (currentWordElement) {
      currentWordElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [userInput, typedWords]);

  const getCharClass = (wordIndex: number, charIndex: number) => {
    if (wordIndex < typedWords.length) {
      const typedWord = typedWords[wordIndex];
      if (charIndex < typedWord.length) {
        return typedWord[charIndex] === words[wordIndex][charIndex]
          ? "text-green-500"
          : "text-red-500";
      }
    } else if (wordIndex === typedWords.length) {
      const currentWord = words[wordIndex];
      if (charIndex < userInput.length) {
        return userInput[charIndex] === currentWord[charIndex]
          ? "text-green-500"
          : "text-red-500";
      } else if (charIndex === userInput.length) {
        return "text-yellow-500";
      }
    }
    return "";
  };

  return (
    <div className="w-3/4">
      <div className="text-3xl mb-4 h-28  overflow-auto no-scrollbar">
        {words.map((word, wordIndex) => (
          <span
            key={wordIndex}
            className="inline-block mr-6"
            ref={(el) => {
              wordsRef.current[wordIndex] = el;
              return undefined;
            }}
          >
            {word.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                className={getCharClass(wordIndex, charIndex)}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
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
