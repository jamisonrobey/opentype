interface ThemeProps {
  name: string;
  accentColor: string;
  textColor: string;
  titleColor: string;
  selected: boolean;
  bgColor: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

const Theme: React.FC<ThemeProps> = ({
  name,
  accentColor,
  textColor,
  titleColor,
  bgColor,
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
      <span className="px-2">{name}</span>
      <div
        className="flex space-x-1 p-1 rounded-3xl m-1"
        style={{ backgroundColor: bgColor }}
      >
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: accentColor }}
        ></div>
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: textColor }}
        ></div>
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: titleColor }}
        ></div>
      </div>
    </div>
  );
};

export default Theme;
