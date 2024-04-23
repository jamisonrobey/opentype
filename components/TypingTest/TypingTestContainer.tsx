"use client";
import { Timer } from "../Timer/Timer";
import { WordRenderer } from "./WordRenderer";
import { InputHandler } from "./InputHandler";
import { useTypingTest } from "../context/TypingTestContext";
export const TypingTestContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      <Timer />
      <WordRenderer />
      <InputHandler />
    </div>
  );
};
