"use client";
import { IncludePuncNums, GameMode, Duration, Language } from "../types";
import { TypingTestContext, TypingTestContextProps } from "./TypingTestContext";
import { useState } from "react";

interface TypingTestProviderProps {
  children: React.ReactNode;
  initialPuncNums: IncludePuncNums;
  initialGameMode: GameMode;
  initialDuration: Duration;
  initialLanguage: Language;
}

export const TypingTestProvider: React.FC<TypingTestProviderProps> = ({
  children,
  initialPuncNums,
  initialGameMode,
  initialDuration,
  initialLanguage,
}) => {
  const [includePuncNums, setIncludePuncNums] = useState(initialPuncNums);
  const [gameMode, setGameMode] = useState(initialGameMode);
  const [duration, setDuration] = useState(initialDuration);
  const [language, setLanguage] = useState(initialLanguage);
  const [words, setWords] = useState<string[]>();
  const [userInput, setUserInput] = useState("");
  const [typedWords, setTypedWords] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const resetTest = () => {
    setGameStarted(false);
    setElapsedTime(0);
    setUserInput("");
    setTypedWords(0);
  };

  const value = {
    includePuncNums,
    setIncludePuncNums,
    gameMode,
    setGameMode,
    duration,
    setDuration,
    language,
    setLanguage,
    words,
    setWords,
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
