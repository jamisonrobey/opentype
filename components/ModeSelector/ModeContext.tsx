import { createContext, useContext, useState } from "react";
import { WordsTimeQuote, PunctuationNumbers, Length } from "./types";

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

const ModeContext = createContext<ModeContextProps | undefined>(undefined);

export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useTypingMode must be used within a TypingModeProvider");
  }
  return context;
};

interface ModeProviderProps {
  children: React.ReactNode;
}
export const ModeProvider: React.FC<ModeProviderProps> = ({ children }) => {
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

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
};
