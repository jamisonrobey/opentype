import ThemeSwitch from "@/components/ThemeSwitcher/ThemeSwitch";
import { TypingTest } from "@/components/TypingTest/TypingTest";
export default async function Home() {
  return (
    <div className="flex flex-grow flex-col w-full items-center justify-start bg-[var(--bg-color)] text-[var(--text-color)] ">
      <TypingTest />
    </div>
  );
}
