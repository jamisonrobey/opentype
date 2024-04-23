"use client";
import { useEffect, useState, useRef } from "react";
import { useTypingTest } from "../context/TypingTestContext";
export const WordRenderer = () => {
  const { words, setWords, resetTest } = useTypingTest();
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

  return (
    <div
      className={`text-3xl w-4/6 mb-4 h-44 space-y-4 overflow-auto no-scrollbar relative ${fadeClass}`}
    >
      {words.map((word, wordIndex) => (
        <span key={word} className={`inline-block mr-6 `}>
          <span>
            {word.split("").map((char, charIndex) => (
              <span key={charIndex}>{char}</span>
            ))}
          </span>
        </span>
      ))}
    </div>
  );
};
