import { createContext, useContext } from "react";
import { GameMode, IncludePuncNums, Duration } from "../types";

export interface TypingTestContextProps {
  includePuncNums: IncludePuncNums;
  setIncludePuncNums: React.Dispatch<React.SetStateAction<IncludePuncNums>>;
  gameMode: GameMode;
  setGameMode: React.Dispatch<React.SetStateAction<GameMode>>;
  duration: Duration;
  setDuration: React.Dispatch<React.SetStateAction<Duration>>;
  words: string[];
  setWords: React.Dispatch<React.SetStateAction<string[]>>;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  typedWords: string[];
  setTypedWords: React.Dispatch<React.SetStateAction<string[]>>;
  gameStarted: boolean;
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  elapsedTime: number;
  setElapsedTime: React.Dispatch<React.SetStateAction<number>>;
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