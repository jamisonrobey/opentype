"use client";
import { useState, useCallback } from "react";
import { Word } from "./Word";
import { CharacterColor } from "./Letter";

const words = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "papaya",
  "quince",
  "raspberry",
  "strawberry",
  "tangerine",
  "ugli",
  "vanilla",
  "watermelon",
  "xigua",
  "yellow",
  "zucchini",
  "apricot",
  "blackberry",
  "coconut",
  "durian",
  "guava",
  "jackfruit",
];

const TypingTest: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentInput, setCurrentInput] = useState<string>("");
  const [characterColors, setCharacterColors] = useState<CharacterColor[][]>(
    words.map((word) => Array(word.length).fill("text-[var(--text-color)]")) // default
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value;
      const currentWord = words[currentIndex];

      if (input.endsWith(" ")) {
        // new word
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setCurrentInput("");
      } else {
        setCurrentInput(input);

        const updatedColors = [...characterColors];
        const currentColors = updatedColors[currentIndex];

        for (let i = 0; i < input.length; i++) {
          // loop through current word, check against correct and colour characters
          currentColors[i] =
            input[i] === currentWord[i]
              ? "text-[var(--title-color)]"
              : "text-red-500";
        }

        for (let i = input.length; i < currentWord.length; i++) {
          currentColors[i] = "text-[var(--text-color)]";
        }

        setCharacterColors(updatedColors);
      }
    },
    [currentIndex, characterColors]
  );

  return (
    <div>
      <div>
        {words.map((word, index) => (
          <Word
            key={index}
            word={word}
            characterColors={characterColors[index]}
          />
        ))}
      </div>
      <input type="text" value={currentInput} onChange={handleInputChange} />
    </div>
  );
};

export default TypingTest;
