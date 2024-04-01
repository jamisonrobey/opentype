import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { WordsTimeQuote } from "./TypingModeSelector";
import { TextIcon, CountdownTimerIcon, QuoteIcon } from "@radix-ui/react-icons";

interface WordsTimeQuoteSelectorProps {
  selectedOption: WordsTimeQuote;
  onChange: (selected: WordsTimeQuote) => void;
}

export const WordsTimeQuoteSelector: React.FC<WordsTimeQuoteSelectorProps> = ({
  selectedOption,
  onChange,
}) => {
  const handleChange = (value: string) => {
    onChange(value as WordsTimeQuote);
  };

  return (
    <ToggleGroup.Root
      className="flex flex-col sm:flex-row items-center justify-evenly space-y-2 sm:space-y-0 sm:space-x-4"
      aria-label="Mode"
      defaultValue="words"
      type="single"
      onValueChange={handleChange}
    >
      <ToggleGroup.Item
        className=" hover:text-[var(--title-color)] data-[state='on']:text-[var(--accent-color)]  duration-75 flex items-center space-x-2"
        value="words"
      >
        <TextIcon className="mb-0.5 w-4 h-4 " />
        <p>words</p>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className=" hover:text-[var(--title-color)] data-[state='on']:text-[var(--accent-color)]  duration-75 flex items-center space-x-2"
        value="time"
      >
        <CountdownTimerIcon className="mb-0.5 w-4 h-4 " />
        <p>time</p>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className=" hover:text-[var(--title-color)] data-[state='on']:text-[var(--accent-color)]  duration-75 flex items-center space-x-2"
        value="quote"
      >
        <QuoteIcon className="mb-0.5 w-4 h-4 " />
        <p>quote</p>
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};
