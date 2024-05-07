"use client";
import { useTypingTest } from "@/components/context/TypingTestContext";
import { useEffect } from "react";
export const WordsModeTimer = () => {
  const {
    words,
    gameMode,
    gamePhase,
    elapsedTime,
    setGamePhase,
    typedWords,
    setElapsedTime,
    duration,
    updateAccuracyMetrics,
    resetTest,
  } = useTypingTest();

  useEffect(() => {
    if (gameMode !== "words") return;
    let timer: NodeJS.Timeout;
    if (gamePhase == "inProgress") {
      timer = setInterval(() => {
        setElapsedTime((time) => time + 1);
        updateAccuracyMetrics();
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [gamePhase, elapsedTime]);

  useEffect(() => {
    if (typedWords.length == duration) {
      resetTest();
      setGamePhase("over");
    }
  }, [typedWords, duration]);
  return (
    <>
      {gameMode == "words" || gameMode == "time"
        ? `${typedWords.length}/${duration}`
        : `${typedWords.length}/${words.length}`}
    </>
  );
};
