import React, { createContext, useState } from 'react';

// Create the Theme Context
export const ThemeContext = createContext();

// Create the Theme Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("Light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};