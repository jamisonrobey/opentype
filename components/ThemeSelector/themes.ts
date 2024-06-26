export type ThemeType = {
  className: string;
  colors: {
    bgColor: string;
    accentColor: string;
    titleColor: string;
    textColor: string;
    borderColor: string;
    bgDarkColor: string;
    darkAccentColor: string;
  };
};
const themes: ThemeType[] = [
  {
    className: "serika-dark",
    colors: {
      bgColor: "#323437",
      accentColor: "#e2b714",
      titleColor: "#e2e2e3",
      textColor: "#646669",
      borderColor: "#1e1f21",
      bgDarkColor: "#2c2e31",
      darkAccentColor: "#323437",
    },
  },

  {
    className: "dracula",
    colors: {
      bgColor: "#282a36",
      accentColor: "#ff79c6",
      titleColor: "#f8f8f2",
      textColor: "#6272a4",
      borderColor: "#1a1c23",
      bgDarkColor: "#2c2e31",
      darkAccentColor: "#323437",
    },
  },

  /*  
  {
    name: "dracula",
    bgColor: "#282a36",
    accentColor: "#ff79c6",
    titleColor: "#f8f8f2",
    textColor: "#6272a4",
    borderColor: "#1a1c23",
  },
  {
    name: "solarized-dark",
    bgColor: "#002b36",
    accentColor: "#cb4b16",
    titleColor: "#93a1a1",
    textColor: "#839496",
    borderColor: "#001f27",
  },
  {
    name: "monokai",
    bgColor: "#272822",
    accentColor: "#f92672",
    titleColor: "#f8f8f2",
    textColor: "#a6e22e",
    borderColor: "#1e1e1a",
  },
  {
    name: "one-dark",
    bgColor: "#282c34",
    accentColor: "#e5c07b",
    titleColor: "#abb2bf",
    textColor: "#7f848e",
    borderColor: "#1c1f24",
  },
  {
    name: "gruvbox-dark",
    bgColor: "#282828",
    accentColor: "#fe8019",
    titleColor: "#ebdbb2",
    textColor: "#a89984",
    borderColor: "#1d2021",
  },
  {
    name: "nord",
    bgColor: "#2e3440",
    accentColor: "#88c0d0",
    titleColor: "#eceff4",
    textColor: "#d8dee9",
    borderColor: "#242933",
  },
  {
    name: "oceanic-next",
    bgColor: "#1b2b34",
    accentColor: "#fac863",
    titleColor: "#c0c5ce",
    textColor: "#65737e",
    borderColor: "#121e23",
  },
  {
    name: "panda",
    bgColor: "#292a2b",
    accentColor: "#ff9ac1",
    titleColor: "#e6e6e6",
    textColor: "#ff4b82",
    borderColor: "#1d1e1e",
  },
  {
    name: "shades-of-purple",
    bgColor: "#2d2b55",
    accentColor: "#fad000",
    titleColor: "#a599e9",
    textColor: "#9e99d1",
    borderColor: "#22213f",
  },
  {
    name: "material-darker",
    bgColor: "#212121",
    accentColor: "#ff9800",
    titleColor: "#eeeeee",
    textColor: "#9e9e9e",
    borderColor: "#161616",
  },
  {
    name: "night-owl",
    bgColor: "#011627",
    accentColor: "#7fdbca",
    titleColor: "#82aaff",
    textColor: "#637777",
    borderColor: "#01111e",
  },
  {
    name: "railscasts",
    bgColor: "#2b2b2b",
    accentColor: "#da4939",
    titleColor: "#f4f1ed",
    textColor: "#e6e1dc",
    borderColor: "#1f1f1f",
  },
  {
    name: "seti",
    bgColor: "#151718",
    accentColor: "#8ec07c",
    titleColor: "#d6d6d6",
    textColor: "#43454b",
    borderColor: "#0d0e0e",
  },
  {
    name: "snazzy",
    bgColor: "#282a36",
    accentColor: "#ff6ac1",
    titleColor: "#eff0eb",
    textColor: "#a5a5a9",
    borderColor: "#1a1c23",
  },
  {
    name: "cobalt2",
    bgColor: "#193549",
    accentColor: "#ffc600",
    titleColor: "#ffffff",
    textColor: "#9cc4e5",
    borderColor: "#0f2130",
  },
  {
    name: "light-plus",
    bgColor: "#ffffff",
    accentColor: "#0066b8",
    titleColor: "#000000",
    textColor: "#333333",
    borderColor: "#e5e5e5",
  },
  {
    name: "solarized-light",
    bgColor: "#fdf6e3",
    accentColor: "#268bd2",
    titleColor: "#073642",
    textColor: "#586e75",
    borderColor: "#eee8d5",
  },
  {
    name: "atom-one-light",
    bgColor: "#fafafa",
    accentColor: "#2979ff",
    titleColor: "#383a42",
    textColor: "#383a42",
    borderColor: "#e5e5e5",
  },
  {
    name: "github-light",
    bgColor: "#ffffff",
    accentColor: "#0366d6",
    titleColor: "#24292e",
    textColor: "#24292e",
    borderColor: "#e1e4e8",
  },
  {
    name: "xcode-light",
    bgColor: "#ffffff",
    accentColor: "#ff5f00",
    titleColor: "#000000",
    textColor: "#333333",
    borderColor: "#e5e5e5",
  }, */
];

export default themes;
