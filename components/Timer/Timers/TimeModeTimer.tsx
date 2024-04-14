"use client";
import { useTypingTest } from "@/components/context/TypingTestContext";
import { useEffect } from "react";
export const TimeModeTimer = () => {
  const {
    elapsedTime,
    setAccuracyMetrics,
    accuracyMetrics,
    setElapsedTime,
    gamePhase,
    setGamePhase,
    duration,
    resetTest,
  } = useTypingTest();
  useEffect(() => {
    let timer;
    // @ts-ignore
    if (gamePhase == "inProgress" && elapsedTime < duration) {
      timer = setTimeout(() => {
        setElapsedTime((time) => time + 1);
        setAccuracyMetrics((prev) => ({
          ...prev,
          wpmOverTime: [...accuracyMetrics.wpmOverTime],
        }));
      }, 1000);
    }
    // @ts-ignore
    if (elapsedTime == duration) {
      clearTimeout(timer);
      resetTest();
      setGamePhase("over");
    }
  }, [gamePhase, elapsedTime]);

  return <>{(duration as number) - elapsedTime}</>;
};
