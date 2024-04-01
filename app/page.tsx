import ThemeSwitch from "@/components/ThemeSwitcher/ThemeSwitch";
import { GameContainer } from "@/components/Game/GameContainer";
export default async function Home() {
  return (
    <div className="min-h-screen flex w-full flex-col items-center bg-[var(--bg-color)] text-[var(--text-color)] ">
      <GameContainer />
      <br></br>
      <br></br>
      <br></br>
      <div>
        <ThemeSwitch />
      </div>
    </div>
  );
}
