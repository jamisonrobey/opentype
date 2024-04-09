import ThemeSwitch from "@/components/ThemeSwitcher/ThemeSwitch";
export default async function Home() {
  return (
    <div className="flex  flex-grow w-full flex-col items-center justify-start bg-[var(--bg-color)] text-[var(--text-color)] ">
      <ThemeSwitch />
    </div>
  );
}
