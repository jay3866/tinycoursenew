"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeType = "orange" | "salmon";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("orange");

  // Toggle between themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "orange" ? "salmon" : "orange"));
  };

  // Apply theme class to document
  useEffect(() => {
    document.documentElement.classList.remove("theme-orange", "theme-salmon");
    document.documentElement.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
}
