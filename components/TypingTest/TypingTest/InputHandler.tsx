"use client";
import { useTypingTest } from "../context/TypingTestContext";

export const InputHandler = () => {
  const { userInput, setUserInput, setTypedWords } = useTypingTest();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(value);
    if (value.endsWith(" ")) {
      setTypedWords((prev) => prev + 1);
      setUserInput("");
    } else {
      setUserInput(value);
    }
  };
  return (
    <input value={userInput} onChange={handleInputChange} className="w-3/4" />
  );
};
