import { createContext, useContext, useState } from "react";
import { WordsTimeQuote, PunctuationNumbers, Length } from "./types";

interface TypingModeContextProps {
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

const TypingModeContext = createContext<TypingModeContextProps | undefined>(
  undefined
);

export const useTypingMode = () => {
  const context = useContext(TypingModeContext);
  if (!context) {
    throw new Error("useTypingMode must be used within a TypingModeProvider");
  }
  return context;
};

interface TypingModeProvider {
  children: React.ReactNode;
}
export const TypingModeProvider: React.FC<TypingModeProvider> = ({
  children,
}) => {
  const [selectedPunctuationNumbers, setSelectedPunctuationNumbers] = useState<
    PunctuationNumbers[]
  >([]);
  const [selectedWordsTimeQuote, setSelectedWordsTimeQuote] =
    useState<WordsTimeQuote>("words");
  const [selectedLength, setSelectedLength] = useState<Length>(10);
  const [showPunctuationNumbers, setShowPunctuationNumbers] = useState(true);

  const value = {
    selectedPunctuationNumbers,
    setSelectedPunctuationNumbers,
    selectedWordsTimeQuote,
    setSelectedWordsTimeQuote,
    selectedLength,
    setSelectedLength,
    showPunctuationNumbers,
    setShowPunctuationNumbers,
  };

  return (
    <TypingModeContext.Provider value={value}>
      {children}
    </TypingModeContext.Provider>
  );
};
