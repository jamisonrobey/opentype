import { createContext, useState, useContext } from "react";

interface GameContextProps {
  words: string[];
  userInput: string;
  typedWords: string[];
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameContextProvider");
  }
  return context;
};

interface GameContextProviderProps {
  children: React.ReactNode;
}

export const GameContextProvider: React.FC<GameContextProviderProps> = ({
  children,
}) => {
  const words = [
    "apple",
    "banana",
    "cherry",
    "apple",
    "banana",
    "cherry",
    "apple",
    "banana",
    "apple",
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "cherry",
    "elderberry",
    "fig",
    "grape",
    "date",
    "elderberry",
    "fig",
    "grape",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "cherry",
    "elderberry",
    "fig",
    "grape",
    "date",
    "elderberry",
    "fig",
    "grape",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "cherry",
    "elderberry",
    "fig",
    "grape",
    "date",
    "elderberry",
    "fig",
    "grape",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "cherry",
    "elderberry",
    "fig",
    "grape",
    "date",
    "elderberry",
    "fig",
    "grape",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
  ];
  const [userInput, setUserInput] = useState("");
  const [typedWords, setTypedWords] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.endsWith(" ")) {
      setTypedWords([...typedWords, value.trim()]);
      setUserInput("");
    } else {
      setUserInput(value);
    }
  };

  const value: GameContextProps = {
    words,
    userInput,
    typedWords,
    handleInputChange,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
