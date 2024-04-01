"use client";
import { TypingModeSelector } from "./TypingModeSelector/TypingModeSelector";
import { TypingModeProvider } from "./TypingModeSelector/TypingModeContext";

export const TestContainer = () => {
  return (
    <TypingModeProvider>
      <div className="flex flex-col w-full items-center">
        <TypingModeSelector />
      </div>
    </TypingModeProvider>
  );
};
