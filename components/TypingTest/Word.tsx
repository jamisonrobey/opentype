import { CharacterColor, Letter } from "./Letter";

interface WordProps {
  word: string;
  characterColors: CharacterColor[];
}

export const Word: React.FC<WordProps> = ({ word, characterColors }) => {
  return (
    <span>
      {word.split("").map((char, charIndex) => (
        <Letter
          key={charIndex}
          char={char}
          color={characterColors[charIndex]}
        />
      ))}{" "}
    </span>
  );
};
