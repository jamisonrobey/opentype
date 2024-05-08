"use client";
import { useState } from "react";
import { LanguageOptions } from "./languages";
import {
  CheckIcon,
  GlobeIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { useTypingTest } from "../context/TypingTestContext";
import { LanguageOption } from "./LanguageOption";
export const LanguageSelector = () => {
  const [open, setOpen] = useState(false);
  const { language } = useTypingTest();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredOptions = LanguageOptions.filter((lang) =>
    lang.language.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <button
        className="rounded flex items-center justify-evenly space-x-2 text-[var(--text-color)] hover:text-[var(--title-color)]"
        onClick={() => setOpen(true)}
      >
        <GlobeIcon className="w-6 h-6" />
        <span className="">{language.language}</span>
      </button>
      {open && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 bg-black opacity-30"
              onClick={() => setOpen(false)}
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
              <div className="">
                {filteredOptions.map((lang) => (
                  <div
                    className={`flex items-center justify-between hover:bg-[var(--accent-color)] w-full rounded cursor-pointer `}
                  >
                    <div className="flex px-2 items-center">
                      {language.language === lang.language ? (
                        <CheckIcon className="w-10 h-10 text-[var(--text-color)]" />
                      ) : (
                        <div className="w-10 h-10"></div>
                      )}
                      <LanguageOption languageOption={lang} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
