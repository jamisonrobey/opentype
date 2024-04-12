"use client";
import { useEffect, useState } from "react";
import { useTypingTest } from "../context/TypingTestContext";

interface WordRendererProps {
  initialWords: string[];
}

export const WordRenderer = ({ initialWords }: WordRendererProps) => {
  const { words, setWords, userInput, typedWords } = useTypingTest();
  const [currentChar, setCurrentChar] = useState(0);
  const [test, setTest] = useState("text-green-500");
  setWords(initialWords);

  useEffect(() => {
    setCurrentChar(userInput.length);
  }, [userInput]);

  const getCharStyle = (wordIndex: number, chIndex: number) => {};

  return (
    <div className="text-2xl w-3/4 mb-4 h-24 overflow-auto no-scrollbar relative">
      {words
        ? words.map((word, wordsIndex) => (
            <span key={wordsIndex} className={`inline-block mr-6 `}>
              <span
                className={typedWords == wordsIndex ? "text-green-500" : ""}
              >
                {word.split("").map((ch, chIndex) => (
                  <span>{ch}</span>
                ))}
              </span>
            </span>
          ))
        : initialWords.map((word, index) => (
            <span key={index} className="inline-block mr-6">
              {word}
            </span>
          ))}
    </div>
  );
};
