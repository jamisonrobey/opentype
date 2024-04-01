export type CharacterColor =
  | "text-[var(--title-color)]"
  | "text-[var(--text-color)]"
  | "text-red-500";

interface LetterProps {
  char: string;
  color: CharacterColor;
}

export const Letter: React.FC<LetterProps> = ({ char, color }) => {
  return (
    <span className={`${color} transition-colors duration-75`}>{char}</span>
  );
};
