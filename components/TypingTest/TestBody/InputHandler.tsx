import { useTypingTest } from "../context/TypingTestContext";
export const InputHandler = ({}) => {
  const {
    gameStarted,
    setGameStarted,
    setTypedWords,
    setUserInput,
    userInput,
    typedWords,
  } = useTypingTest();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!gameStarted) {
      setGameStarted(true);
    }
    if (value.endsWith(" ")) {
      setTypedWords([...typedWords, value.trim()]);
      setUserInput("");
    } else {
      setUserInput(value);
    }
  };

  return (
    <input
      type="text"
      value={userInput}
      onChange={handleInputChange}
      className="w-full"
    />
  );
};
