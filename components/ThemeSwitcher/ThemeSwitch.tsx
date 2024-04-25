"use client";
import { useEffect, useState } from "react";
import themes from "./Themes";
import Theme from "./Theme";
import { ThemeType } from "./Themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useTypingTest } from "../context/TypingTestContext";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTypingTest();
  const [tempTheme, setTempTheme] = useState(theme);
  const [hoverTheme, setHoverTheme] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.body.classList.remove(...themes.map((t) => t.className));
    document.body.classList.add(theme.className);
  }, [theme, hoverTheme]);

  const handleThemeChange = (selectedTheme: ThemeType) => {
    setTheme(selectedTheme);
    setIsOpen(false);
  };

  const handleMouseEnter = (selectedTheme: ThemeType) => {
    setTempTheme(theme);
    setTheme(selectedTheme);
  };

  const handleMouseLeave = () => {
    setTheme(tempTheme);
    setTempTheme(theme);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredThemes = themes.filter((t) =>
    t.className.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <button
        className="rounded text-[var(--text-color)] hover:text-[var(--title-color)]"
        onClick={() => setIsOpen(true)}
      >
        Change Theme
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 bg-black opacity-30"
              onClick={() => setIsOpen(false)}
            ></div>
            <div className="bg-[var(--bg-color)] p-1 rounded-lg w-2/4 border-4 border-[var(--border-color)] shadow-lg z-20">
              <div className="flex items-center justify-between p-2">
                <MagnifyingGlassIcon className="w-8 h-8" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="bg-[var(--bg-color)] placeholder-[var(--text-color)] text-[var(--text-color)] w-11/12"
                />
              </div>
              <div className="">
                {filteredThemes.map((t) => (
                  <Theme
                    key={t.className}
                    theme={t}
                    selected={theme === t}
                    onMouseEnter={() => handleMouseEnter(t)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleThemeChange(t)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThemeSwitch;
