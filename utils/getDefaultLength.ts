import { WordsTimeQuote } from "@/components/ModeSelector/types";

export const getDefaultLengthForMode = (mode: WordsTimeQuote) => {
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
