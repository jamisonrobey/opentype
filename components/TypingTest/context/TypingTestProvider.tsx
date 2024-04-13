"use client";
import {
  IncludePuncNums,
  GameMode,
  Duration,
  Language,
  AccuracyMetrics,
  GamePhase,
} from "../types";
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
  const [typedWords, setTypedWords] = useState<string[]>([]);
  const [accuracyMetrics, setAccuracyMetrics] = useState<AccuracyMetrics>({
    correct: 0,
    total: 0,
  });
  const [gamePhase, setGamePhase] = useState<GamePhase>("notStarted");
  const [elapsedTime, setElapsedTime] = useState(0);

  const resetTest = () => {
    setUserInput("");
    setTypedWords([]);
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
    gamePhase,
    setGamePhase,
    elapsedTime,
    setElapsedTime,
    resetTest,
    userInput,
    setUserInput,
    typedWords,
    setTypedWords,
    accuracyMetrics,
    setAccuracyMetrics,
  } as TypingTestContextProps;

  return (
    <TypingTestContext.Provider value={value}>
      {children}
    </TypingTestContext.Provider>
  );
};
