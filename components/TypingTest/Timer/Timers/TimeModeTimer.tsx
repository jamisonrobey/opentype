"use client";
import { useTypingTest } from "@/components/context/TypingTestContext";
import { useEffect } from "react";
export const TimeModeTimer = () => {
  const {
    elapsedTime,
    updateAccuracyMetrics,
    setElapsedTime,
    gamePhase,
    setGamePhase,
    duration,
    resetTest,
  } = useTypingTest();
  useEffect(() => {
    let timer;
    // @ts-ignore
    if (gamePhase == "inProgress") {
      timer = setTimeout(() => {
        setElapsedTime((time) => time + 1);
        updateAccuracyMetrics();
      }, 1000);
    }
    // @ts-ignore
    if (elapsedTime == duration + 1) {
      clearTimeout(timer);
      resetTest();
      setGamePhase("over");
    }
  }, [gamePhase, elapsedTime]);

  return <>{(duration as number) - elapsedTime}</>;
};
