import { createContext, ReactNode, useState } from "react";

export const ThemeContext = createContext<{ darkTheme: boolean, toggleTheme: () => void }>({ darkTheme: false, toggleTheme: () => {}});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [darkTheme, setDarkTheme] = useState(false);
  
    const toggleTheme = () => {
      setDarkTheme((prevTheme) => !prevTheme);
      document.body.classList.add(darkTheme ? "theme-light" : "theme-dark")
      document.body.classList.remove(!darkTheme ? "theme-light" : "theme-dark")
    };
  
    return (
      <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };

