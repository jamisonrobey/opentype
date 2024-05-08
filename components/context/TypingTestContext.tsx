"use client";
import { createContext, useContext } from "react";
import { ThemeType } from "../ThemeSwitcher/Themes";
import {
  GameMode,
  IncludePuncNums,
  Duration,
  Language,
  AccuracyMetrics,
  GamePhase,
} from "../TypingTest/types";

export interface TypingTestContextProps {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  includePuncNums: IncludePuncNums;
  setIncludePuncNums: React.Dispatch<React.SetStateAction<IncludePuncNums>>;
  gameMode: GameMode;
  setGameMode: React.Dispatch<React.SetStateAction<GameMode>>;
  duration: Duration;
  setDuration: React.Dispatch<React.SetStateAction<Duration>>;
  words: string[];
  setWords: React.Dispatch<React.SetStateAction<string[]>>;
  fadeClass: string;
  fadeTextOut: () => void;
  fadeTextIn: (text: string) => void;
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  gamePhase: GamePhase;
  setGamePhase: React.Dispatch<React.SetStateAction<GamePhase>>;
  elapsedTime: number;
  setElapsedTime: React.Dispatch<React.SetStateAction<number>>;
  accuracyMetrics: AccuracyMetrics;
  setAccuracyMetrics: React.Dispatch<React.SetStateAction<AccuracyMetrics>>;
  updateAccuracyMetrics: () => void;
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  typedWords: string[];
  setTypedWords: React.Dispatch<React.SetStateAction<string[]>>;
  resetTest: () => void;
}

export const TypingTestContext = createContext<
  TypingTestContextProps | undefined
>(undefined);

export const useTypingTest = () => {
  const context = useContext(TypingTestContext);
  if (!context) {
    throw new Error("useTypingTest must be used withing a TypingTestProvider");
  }
  return context;
};