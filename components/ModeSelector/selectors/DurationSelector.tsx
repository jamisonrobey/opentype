import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Duration } from "@/components/TypingTest/types";
import { useTypingTest } from "@/components/context/TypingTestContext";

export const LengthSelector: React.FC = () => {
  const { gameMode, duration, setDuration } = useTypingTest();

  const handleChange = (value: string) => {
    if (gameMode === "quote") {
      setDuration(value as Duration);
    } else if (gameMode == "time") {
      setDuration(parseInt(value, 10) as Duration);
    } else {
      setDuration(parseInt(value, 10) as Duration);
    }
  };

  let lengthOptions: JSX.Element[] = [];

  if (gameMode === "words") {
    lengthOptions = [10, 25, 50, 100].map((length) => (
      <ToggleGroup.Item
        key={length}
        className="hover:text-[var(--title-color)] data-[state='on']:text-[var(--accent-color)] duration-75 flex animate-fade-in items-center space-x-2"
        value={length.toString()}
      >
        {length}
      </ToggleGroup.Item>
    ));
  } else if (gameMode === "time") {
    lengthOptions = [15, 30, 60, 120].map((length) => (
      <ToggleGroup.Item
        key={length}
        className="hover:text-[var(--title-color)] data-[state='on']:text-[var(--accent-color)] duration-75 animate-fade-in flex items-center space-x-2"
        value={length.toString()}
      >
        {length}
      </ToggleGroup.Item>
    ));
  } else if (gameMode === "quote") {
    lengthOptions = ["all", "short", "medium", "long"].map((length) => (
      <ToggleGroup.Item
        key={length}
        className="hover:text-[var(--title-color)] data-[state='on']:text-[var(--accent-color)] duration-75 flex animate-fade-in items-center space-x-2"
        value={length}
      >
        {length}
      </ToggleGroup.Item>
    ));
  }

  return (
    <ToggleGroup.Root
      className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-center justify-evenly sm:space-x-4"
      aria-label="Length"
      type="single"
      value={duration.toString()}
      onValueChange={handleChange}
    >
      {lengthOptions}
    </ToggleGroup.Root>
  );
};
