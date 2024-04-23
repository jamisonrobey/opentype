"use client";
import themes, { ThemeType } from "../ThemeSwitcher/Themes";
import {
  IncludePuncNums,
  GameMode,
  Duration,
  Language,
  AccuracyMetrics,
  GamePhase,
} from "../TypingTest/types";
import { TypingTestContext, TypingTestContextProps } from "./TypingTestContext";
import { useState } from "react";

interface TypingTestProviderProps {
  children: React.ReactNode;
  initialPuncNums: IncludePuncNums;
  initialGameMode: GameMode;
  initialDuration: Duration;
  initialLanguage: Language;
  initialWords: string[];
}

export const TypingTestProvider: React.FC<TypingTestProviderProps> = ({
  children,
  initialPuncNums,
  initialGameMode,
  initialDuration,
  initialLanguage,
  initialWords,
}) => {
  const [includePuncNums, setIncludePuncNums] = useState(initialPuncNums);
  const [gameMode, setGameMode] = useState(initialGameMode);
  const [duration, setDuration] = useState(initialDuration);
  const [language, setLanguage] = useState(initialLanguage);
  const [words, setWords] = useState<string[]>(initialWords);
  const [userInput, setUserInput] = useState("");
  const [elapsedTime, setElapsedTime] = useState(0);

  const resetTest = () => {
    setUserInput("");
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
    elapsedTime,
    setElapsedTime,
    resetTest,
    userInput,
    setUserInput,
  } as TypingTestContextProps;

  return (
    <TypingTestContext.Provider value={value}>
      {children}
    </TypingTestContext.Provider>
  );
};
