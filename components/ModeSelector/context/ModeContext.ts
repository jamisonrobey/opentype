import { createContext, useContext } from "react";
import { WordsTimeQuote, PunctuationNumbers, Length } from "../types";

interface ModeContextProps {
  selectedPunctuationNumbers: PunctuationNumbers[];
  setSelectedPunctuationNumbers: React.Dispatch<
    React.SetStateAction<PunctuationNumbers[]>
  >;
  selectedWordsTimeQuote: WordsTimeQuote;
  setSelectedWordsTimeQuote: React.Dispatch<
    React.SetStateAction<WordsTimeQuote>
  >;
  selectedLength: Length;
  setSelectedLength: React.Dispatch<React.SetStateAction<Length>>;
  showPunctuationNumbers: boolean;
  setShowPunctuationNumbers: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModeContext = createContext<ModeContextProps | undefined>(
  undefined
);

export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useTypingMode must be used within a TypingModeProvider");
  }
  return context;
};
