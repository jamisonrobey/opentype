"use client";
import { ModeSelector } from "../ModeSelector/ModeSelector";
import { ModeProvider } from "../ModeSelector/ModeContext";
import { GameContextProvider } from "./GameContext";
import { Game } from "./Game";

export const GameContainer = () => {
  return (
    <ModeProvider>
      <div className="flex flex-col w-full items-center">
        <ModeSelector />
        <GameContextProvider>
          <Game />
        </GameContextProvider>
      </div>
    </ModeProvider>
  );
};
