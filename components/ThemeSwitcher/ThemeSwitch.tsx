"use client";
import { useLocalStorage } from "usehooks-ts";
import { useEffect, useState } from "react";
import themes from "./Themes";
import Theme from "./Theme";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
const ThemeSwitch = () => {
  const [theme, setTheme] = useLocalStorage("theme", "serika-dark");
  const [hoverTheme, setHoverTheme] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.body.classList.remove(...themes.map((t) => t.name));
    document.body.classList.add(hoverTheme || theme);
  }, [theme, hoverTheme]);

  const handleThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
    setIsOpen(false);
  };

  const handleMouseEnter = (selectedTheme: string) => {
    setHoverTheme(selectedTheme);
  };

  const handleMouseLeave = () => {
    setHoverTheme("");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredThemes = themes.filter((t) =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <button
        className="px-4 py-2 rounded text-[var(--text-color)] hover:text-[var(--title-color)]"
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
                    key={t.name}
                    {...t}
                    selected={(hoverTheme || theme) === t.name}
                    onMouseEnter={() => handleMouseEnter(t.name)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleThemeChange(t.name)}
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