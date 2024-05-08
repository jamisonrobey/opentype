"use client";
import { useEffect, useState } from "react";
import { ColorWheelIcon } from "@radix-ui/react-icons";
import { MagicWandIcon } from "@radix-ui/react-icons";
import themes from "./themes";
import Theme from "./Theme";
import { ThemeType } from "./themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useTypingTest } from "../context/TypingTestContext";

const ThemeSelector = () => {
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
        className="rounded flex space-x-2 items-center justify-center text-[var(--text-color)] hover:text-[var(--title-color)]"
        onClick={() => setIsOpen(true)}
      >
        <MagicWandIcon className="w-6 h-6" />
        <span className="">{theme.className}</span>
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 bg-black opacity-30"
              onClick={() => setIsOpen(false)}
            ></div>
            <div className="bg-[var(--bg-color)] p-1 rounded-lg w-2/4 border-4 border-[var(--bgDark-color)] shadow-lg z-20">
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
              <div className="space-y-4">
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

export default ThemeSelector;
