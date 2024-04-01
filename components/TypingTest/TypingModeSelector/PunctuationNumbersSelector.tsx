import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { WordsTimeQuote } from "./TypingModeSelector";
import { TextIcon, CountdownTimerIcon, QuoteIcon } from "@radix-ui/react-icons";
import { HashIcon } from "@/components/static/HashIcon";

interface PunctuationNumbersSelectorProps {
  selectedOption: WordsTimeQuote;
  onChange: (selected: WordsTimeQuote) => void;
}

export const PunctuationNumbersSelector: React.FC<
  PunctuationNumbersSelectorProps
> = ({ selectedOption, onChange }) => {
  const handleChange = (value: string) => {
    onChange(value as WordsTimeQuote);
  };

  return (
    // @ts-ignore  -- defaultValue is correct type but TS doesn't like it
    <ToggleGroup.Root
      className="flex items-center justify-evenly sm:space-x-4"
      aria-label="Mode"
      defaultValue={[]}
      type="multiple"
      onValueChange={handleChange}
    >
      <ToggleGroup.Item
        className=" hover:text-[var(--title-color)] data-[state='on']:text-[var(--accent-color)]   duration-75 flex items-center space-x-2"
        value="punctuation"
      >
        <TextIcon className="mb-0.5 w-4 h-4 " />
        <p>punctuation</p>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className=" hover:text-[var(--title-color)]  data-[state='on']:text-[var(--accent-color)]   duration-75 hover:stroke-[var(--title-color)] data-[state='on']:stroke-[var(--accent-color)]  stroke-[var(--text-color)] flex items-center space-x-2"
        value="numbers"
      >
        <HashIcon />
        <p>numbers</p>
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};
