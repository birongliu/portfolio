import { createContext, ReactNode, useState } from "react";

export type ThemeType = "light" | "dark";
interface IThemeContext {
  theme: ThemeType;
  toggleTheme: () => void;
}

const updateTheme = (theme: "dark" | "light") => {
  localStorage.setItem("theme", theme);
  document.body.className = `theme-${theme}`;
};

const theme = localStorage.getItem("theme") as ThemeType;
const defaultThemeContext: IThemeContext = {
  theme,
  toggleTheme: () => updateTheme(theme),
};

export const ThemeContext = createContext<IThemeContext>(defaultThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("dark");

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "light"));

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};