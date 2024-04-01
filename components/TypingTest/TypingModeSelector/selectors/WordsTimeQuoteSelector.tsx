import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { TextIcon, CountdownTimerIcon, QuoteIcon } from "@radix-ui/react-icons";
import { useTypingMode } from "../TypingModeContext";
import { WordsTimeQuote } from "../types";
interface WordsTimeQuoteSelectorProps {
  onChange: (selected: WordsTimeQuote) => void;
}

export const WordsTimeQuoteSelector: React.FC<WordsTimeQuoteSelectorProps> = ({
  onChange,
}) => {
  const { selectedWordsTimeQuote } = useTypingMode();

  const handleChange = (value: string) => {
    onChange(value as WordsTimeQuote);
  };

  return (
    <ToggleGroup.Root
      className="flex flex-col sm:flex-row items-center justify-evenly space-y-2 sm:space-y-0 sm:space-x-4"
      aria-label="Mode"
      type="single"
      value={selectedWordsTimeQuote}
      onValueChange={handleChange}
    >
      <ToggleGroup.Item
        className=" sm:px-4 sm:py-4  hover:text-[var(--title-color)] data-[state='on']:text-[var(--accent-color)] duration-75 flex items-center space-x-2"
        value="words"
        disabled={selectedWordsTimeQuote === "words"}
      >
        <TextIcon className="mb-0.5 w-4 h-4" />
        <p>words</p>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className=" sm:px-4 sm:py-4  hover:text-[var(--title-color)] data-[state='on']:text-[var(--accent-color)] duration-75 flex items-center space-x-2"
        value="time"
        disabled={selectedWordsTimeQuote === "time"}
      >
        <CountdownTimerIcon className="mb-0.5 w-4 h-4" />
        <p>time</p>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className=" sm:px-4 sm:py-4 hover:text-[var(--title-color)] data-[state='on']:text-[var(--accent-color)] duration-75 flex items-center space-x-2"
        value="quote"
        disabled={selectedWordsTimeQuote === "quote"}
      >
        <QuoteIcon className="mb-0.5 w-4 h-4" />
        <p>quote</p>
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};
