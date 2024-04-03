import { useTypingTest } from "./context/TypingTestContext";
import { WordsModeDuration, TimeModeDuration } from "./types";

export const Timer = () => {
  const { gameMode, duration, gameStarted, elapsedTime, typedWords, words } =
    useTypingTest();
  const getTimer = () => {
    switch (gameMode) {
      case "time":
        return `${(duration as TimeModeDuration) - elapsedTime}`;
      case "words":
        return `${typedWords.length}/${duration as WordsModeDuration}`;
      case "quote":
        return `${typedWords.length}/${words.length}`;
    }
  };

  return (
    <span
      className={`text-3xl w-full text-[var(--accent-color)] ${
        gameStarted ? "visible" : "visible"
      }`}
    >
      {getTimer()}
    </span>
  );
};
