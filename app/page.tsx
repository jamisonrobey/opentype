import ThemeSwitch from "@/components/ThemeSwitcher/ThemeSwitch";
import { TestContainer } from "@/components/TypingTest/TestContainer";
export default async function Home() {
  return (
    <div className="flex flex-grow flex-col w-full items-center justify-start bg-[var(--bg-color)] text-[var(--text-color)] ">
      <TestContainer />
    </div>
  );
}
