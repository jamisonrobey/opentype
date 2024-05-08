import { LanguageOptionType } from "./languages";

interface LanguageOptionProps {
  languageOption: LanguageOptionType;
}

export const LanguageOption: React.FC<LanguageOptionProps> = ({
  languageOption,
}) => {
  return (
    <div
      className={`pl-8 flex items-center justify-between hover:bg-[var(--accent-color)] w-full rounded cursor-pointer `}
    >
      <span>{languageOption.language}</span>
    </div>
  );
};
