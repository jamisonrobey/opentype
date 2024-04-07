"use client";
import { Timer } from "./Timer";
import { WordRenderer } from "./TestBody/WordRenderer";
import { InputHandler } from "./TestBody/InputHandler";
import { WordStreamer } from "./TestBody/WordStreamer";
export const TestBody = () => {
  return (
    <div className={`w-3/4 space-y-4`}>
      <Timer />
      <WordRenderer />
      <InputHandler />
      <WordStreamer />
    </div>
  );
};
