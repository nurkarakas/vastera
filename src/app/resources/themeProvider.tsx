"use client";

import { createContext, useContext, useEffect, ReactNode } from "react";

interface ThemeContextType {
  theme: "dark";
}

const ThemeContext = createContext<ThemeContextType>({ theme: "dark" });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // Always force dark mode
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
