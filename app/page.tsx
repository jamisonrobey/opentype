import ThemeSwitch from "@/components/ThemeSwitcher/ThemeSwitch";
import { TestContainer } from "@/components/TypingTest/TestContainer";
export default async function Home() {
  return (
    <div className="min-h-screen flex w-full flex-col items-center bg-[var(--bg-color)] text-[var(--text-color)] ">
      <TestContainer />
      <br></br>
      <br></br>
      <br></br>
      <div>
        <ThemeSwitch />
      </div>
    </div>
  );
}
