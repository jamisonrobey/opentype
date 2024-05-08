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
  const [theme, setTheme] = useState<ThemeType>(themes[0]);
  const [includePuncNums, setIncludePuncNums] = useState(initialPuncNums);
  const [gameMode, setGameMode] = useState(initialGameMode);
  const [duration, setDuration] = useState(initialDuration);
  const [language, setLanguage] = useState(initialLanguage);
  const [words, setWords] = useState<string[]>(initialWords);
  const [fadeClass, setFadeClass] = useState("");
  const [userInput, setUserInput] = useState("");
  const [typedWords, setTypedWords] = useState<string[]>([]);
  const [accuracyMetrics, setAccuracyMetrics] = useState<AccuracyMetrics>({
    correct: 0,
    total: 0,
    chartData: [],
  });
  const [gamePhase, setGamePhase] = useState<GamePhase>("notStarted");
  const [elapsedTime, setElapsedTime] = useState(0);

  const resetTest = () => {
    setUserInput("");
  };

  const fadeTextOut = () => {
    setFadeClass("opacity-0 transition-all duration-150");
  };

  const fadeTextIn = (text: string) => {
    const newWords = text.split(" ");
    setTimeout(() => {
      setWords(newWords);
      setFadeClass("opacity-100 transition-all ease-linear duration-150");
    }, 300);
  };

  const updateAccuracyMetrics = () => {
    if (typedWords.length == 0) return;
    const { correct, total } = accuracyMetrics;
    const newWpm = (correct / 5) * (60 / elapsedTime);
    const newRaw = (total / 5) * (60 / elapsedTime);
    setAccuracyMetrics((prev) => ({
      ...prev,
      chartData: [
        ...prev.chartData,
        { name: elapsedTime.toString(), wpm: newWpm, raw: newRaw },
      ],
    }));
  };

  const value = {
    theme,
    setTheme,
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
    fadeClass,
    fadeTextOut,
    fadeTextIn,
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
    updateAccuracyMetrics,
  } as TypingTestContextProps;

  return (
    <TypingTestContext.Provider value={value}>
      {children}
    </TypingTestContext.Provider>
  );
};
