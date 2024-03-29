import ThemeSwitch from "@/components/ThemeSwitcher/ThemeSwitch";

export default function Home() {
  return (
    <div className="min-h-screen flex-grow-1 w-full py-8 px-72 bg-[var(--bg-color)] text-[var(--text-color)] ">
      <ThemeSwitch />
    </div>
  );
}
