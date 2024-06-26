import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { IncludePuncNums } from "@/components/TypingTest/types";
import { TextIcon } from "@radix-ui/react-icons";
import { HashIcon } from "@/components/static/HashIcon";
import { useTypingTest } from "@/components/context/TypingTestContext";

export const PunctuationNumbersSelector: React.FC = () => {
  const { includePuncNums, setIncludePuncNums } = useTypingTest();

  const handleChange = (value: string[]) => {
    setIncludePuncNums(value as IncludePuncNums);
  };

  return (
    <ToggleGroup.Root
      className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-center justify-evenly sm:space-x-4"
      aria-label="Punctuation and Numbers"
      type="multiple"
      value={includePuncNums}
      onValueChange={handleChange}
    >
      <ToggleGroup.Item
        className="hover:text-[var(--title-color)] data-[state='on']:text-[var(--accent-color)] duration-75 flex items-center space-x-2"
        value="punctuation"
      >
        <TextIcon className="mb-0.5 w-4 h-4" />
        <p>punctuation</p>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="hover:text-[var(--title-color)] data-[state='on']:text-[var(--accent-color)] duration-75 hover:stroke-[var(--title-color)] data-[state='on']:stroke-[var(--accent-color)] stroke-[var(--text-color)] flex items-center space-x-2"
        value="numbers"
      >
        <HashIcon />
        <p>numbers</p>
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};
