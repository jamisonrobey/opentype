"use client";
import { useTypingTest } from "@/components/context/TypingTestContext";
import { useEffect } from "react";
export const WordsModeTimer = () => {
  const {
    gamePhase,
    elapsedTime,
    setGamePhase,
    typedWords,
    setElapsedTime,
    duration,
    resetTest,
  } = useTypingTest();
  useEffect(() => {
    let timer;
    // @ts-ignore
    if (gamePhase == "inProgress" && elapsedTime < duration) {
      timer = setTimeout(() => {
        setElapsedTime((time) => time + 1);
      }, 1000);
    }
    if (typedWords.length == duration) {
      clearTimeout(timer);
      resetTest();
      setGamePhase("over");
    }
  }, [typedWords]);
  return (
    <>
      {typedWords.length}/{duration}
    </>
  );
};
