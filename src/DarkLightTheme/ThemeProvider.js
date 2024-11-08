import React, {createContext, useState } from 'react';

// Create a ThemeContext
const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
 const [theme, setTheme] = useState('light');

// Function to toggle the theme

const toggleTheme = () => {
    setTheme ((prevTheme) => (prevTheme === 'light'? 'dark': 'light'));
  };

return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
      </ThemeContext.Provider>

);
};

export { ThemeContext, ThemeProvider };