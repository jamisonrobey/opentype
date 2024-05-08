"use client";
import { WordRenderer } from "./WordRenderer";
import { useTypingTest } from "../context/TypingTestContext";
import { InputHandler } from "./InputHandler";
import { LanguageSelector } from "../LangageSelector/LanguageSelector";
import { Timer } from "./Timer/Timer";
import { Results } from "./Results/Results";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
export const Test = () => {
  const { gamePhase, accuracyMetrics } = useTypingTest();
  return gamePhase == "over" ? (
    <div className="flex flex-col flex-grow w-full items-center justify-center ">
      <Results />
    </div>
  ) : (
    <div
      className={`flex w-full flex-col items-center justify-center flex-grow`}
    >
      <div className="flex space-x-4">
        <LanguageSelector />
        <ThemeSelector />
      </div>
      <Timer />
      <WordRenderer />
      <InputHandler />
    </div>
  );
};
