import { Language } from "@/components/TypingTest/types";
import {
  englishWords10kTable,
  englishWords1kTable,
  englishWords5kTable,
} from "@/lib/schema";
export const switchLangForTable = (language: Language) => {
  switch (language) {
    case "english-1k":
      return englishWords1kTable;
    case "english-5k":
      return englishWords5kTable;
    case "english-10k":
      return englishWords10kTable;
  }
};
