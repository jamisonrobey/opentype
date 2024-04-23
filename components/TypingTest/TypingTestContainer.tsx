"use client";
import { Timer } from "../Timer/Timer";
import { WordRenderer } from "./WordRenderer";
import { InputHandler } from "./InputHandler";
import { useTypingTest } from "../context/TypingTestContext";
import { TestResults } from "../Results/TestResults";
export const TypingTestContainer = () => {
  const { gamePhase } = useTypingTest();
  return gamePhase == "over" ? (
    <div className="flex flex-col flex-grow w-full items-center justify-center ">
      <TestResults />
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center flex-grow">
      <Timer />
      <WordRenderer />
      <InputHandler />
    </div>
  );
};
