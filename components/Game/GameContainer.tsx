"use client";
import { ModeSelector } from "../ModeSelector/ModeSelector";
import { ModeProvider } from "../ModeSelector/ModeContext";

export const GameContainer = () => {
  return (
    <ModeProvider>
      <div className="flex flex-col w-full items-center">
        <ModeSelector />
      </div>
    </ModeProvider>
  );
};
