"use client";
import { IncludePuncNums, GameMode, Duration } from "../types";
import { TypingTestContext, TypingTestContextProps } from "./TypingTestContext";
import { useState } from "react";

interface TypingTestProviderProps {
  children: React.ReactNode;
  initialWords: string[];
  initialPuncNums: IncludePuncNums;
  initialGameMode: GameMode;
  initialDuration: Duration;
  initialLanguage: string;
}

export const TypingTestProvider: React.FC<TypingTestProviderProps> = ({
  children,
  initialWords,
  initialPuncNums,
  initialGameMode,
  initialDuration,
  initialLanguage,
}) => {
  const [words, setWords] = useState(initialWords);
  const [includePuncNums, setIncludePuncNums] = useState(initialPuncNums);
  const [gameMode, setGameMode] = useState(initialGameMode);
  const [duration, setDuration] = useState(initialDuration);
  const [language, setLanguage] = useState(initialLanguage);
  const [userInput, setUserInput] = useState("");
  const [typedWords, setTypedWords] = useState<string[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const resetTest = () => {
    setGameStarted(false);
    setElapsedTime(0);
    setUserInput("");
    setTypedWords((words) => []);
  };

  const value = {
    words,
    setWords,
    includePuncNums,
    setIncludePuncNums,
    gameMode,
    setGameMode,
    duration,
    setDuration,
    language,
    setLanguage,
    userInput,
    setUserInput,
    gameStarted,
    typedWords,
    setTypedWords,
    setGameStarted,
    elapsedTime,
    setElapsedTime,
    resetTest,
  } as TypingTestContextProps;

  return (
    <TypingTestContext.Provider value={value}>
      {children}
    </TypingTestContext.Provider>
  );
};
