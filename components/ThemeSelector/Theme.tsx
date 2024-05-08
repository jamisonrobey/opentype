import { ThemeType } from "./themes";
interface ThemeProps {
  theme: ThemeType;
  selected: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

const Theme: React.FC<ThemeProps> = ({
  theme,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  return (
    <div
      className={`flex items-center justify-between hover:bg-[var(--accent-color)] w-full rounded cursor-pointer `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <span className="px-2">{theme.className}</span>
      <div
        className="flex space-x-1 p-1 rounded-3xl m-1"
        style={{ backgroundColor: theme.colors.bgColor }}
      >
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: theme.colors.accentColor }}
        ></div>
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: theme.colors.textColor }}
        ></div>
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: theme.colors.titleColor }}
        ></div>
      </div>
    </div>
  );
};

export default Theme;
