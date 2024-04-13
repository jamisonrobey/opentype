"use client";
import { useTypingTest } from "../context/TypingTestContext";

export const InputHandler = () => {
  const {
    gamePhase,
    setGamePhase,
    userInput,
    setUserInput,
    words,
    typedWords,
    setTypedWords,
    accuracyMetrics,
    setAccuracyMetrics,
  } = useTypingTest();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const currentWord = words[typedWords.length];
    if (gamePhase == "notStarted") {
      setGamePhase("inProgress");
    }
    if (value.endsWith(" ")) {
      let correct = 0;
      for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] == value[i]) correct++;
      }
      setTypedWords((prev) => [...prev, value]);
      setUserInput("");
      setAccuracyMetrics((prev) => ({
        correct: prev.correct + correct,
        total: prev.total + value.length - 1,
      }));
    } else {
      setUserInput(value);
    }
  };
  return (
    <input value={userInput} onChange={handleInputChange} className="w-4/6" />
  );
};
