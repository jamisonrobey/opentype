import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useTypingMode } from "../TypingModeContext";
import { Length } from "../types";

export const LengthSelector: React.FC = () => {
  const { selectedWordsTimeQuote, selectedLength, setSelectedLength } =
    useTypingMode();

  const handleChange = (value: string) => {
    setSelectedLength(parseInt(value, 10) as Length);
  };

  let lengthOptions: JSX.Element[] = [];

  if (selectedWordsTimeQuote === "words") {
    lengthOptions = [10, 25, 50, 100].map((length) => (
      <ToggleGroup.Item
        key={length}
        className="hover:text-[var(--title-color)] data-[state='on']:text-[var(--accent-color)] duration-75 flex items-center space-x-2"
        value={length.toString()}
      >
        {length}
      </ToggleGroup.Item>
    ));
  } else if (selectedWordsTimeQuote === "time") {
    lengthOptions = [15, 30, 60, 120].map((length) => (
      <ToggleGroup.Item
        key={length}
        className="hover:text-[var(--title-color)] data-[state='on']:text-[var(--accent-color)] duration-75 flex items-center space-x-2"
        value={length.toString()}
      >
        {length}
      </ToggleGroup.Item>
    ));
  } else if (selectedWordsTimeQuote === "quote") {
    lengthOptions = ["all", "short", "medium", "long"].map((length) => (
      <ToggleGroup.Item
        key={length}
        className="hover:text-[var(--title-color)] data-[state='on']:text-[var(--accent-color)] duration-75 flex items-center space-x-2"
        value={length}
      >
        {length}
      </ToggleGroup.Item>
    ));
  }

  return (
    <ToggleGroup.Root
      className="flex items-center justify-evenly sm:space-x-4"
      aria-label="Length"
      type="single"
      value={selectedLength.toString()}
      onValueChange={handleChange}
    >
      {lengthOptions}
    </ToggleGroup.Root>
  );
};
