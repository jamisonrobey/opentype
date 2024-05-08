"use client";
import { WordRenderer } from "./WordRenderer";
import { useTypingTest } from "../context/TypingTestContext";
import { InputHandler } from "./InputHandler";
import { Timer } from "./Timer/Timer";
import { Results } from "./Results/Results";
export const Test = () => {
  const { gamePhase, fadeClass, accuracyMetrics } = useTypingTest();
  return gamePhase == "over" ? (
    <div className="flex flex-col flex-grow w-full items-center justify-center ">
      <Results />
    </div>
  ) : (
    <div
      className={`${fadeClass} flex w-full flex-col items-center justify-center flex-grow`}
    >
      <Timer />
      <WordRenderer />
      <InputHandler />
    </div>
  );
};
