"use client";
import { useTypingTest } from "@/components/context/TypingTestContext";
import { TimeModeTimer } from "./Timers/TimeModeTimer";
import { WordsModeTimer } from "./Timers/WordsModeTimer";
import { QuoteModeTimer } from "./Timers/QuoteModeTimer";
export const Timer = () => {
  const { gamePhase, fadeClass, gameMode } = useTypingTest();
  const getTimer = () => {
    switch (gameMode) {
      case "time":
        return <TimeModeTimer />;
      case "words":
        return <WordsModeTimer />;
      case "quote":
        return <QuoteModeTimer />;
    }
  };
  return (
    <p
      className={`duration-300 w-4/6 text-3xl text-[var(--accent-color)] ${fadeClass}
      `}
    >
      {getTimer()}
    </p>
  );
};
