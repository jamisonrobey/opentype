import { GameMode } from "@/components/TypingTest/types";

export const getDefaultLengthForMode = (mode: GameMode) => {
  switch (mode) {
    case "words":
      return 10;
    case "time":
      return 15;
    case "quote":
      return 10;
    default:
      return 10;
  }
};
