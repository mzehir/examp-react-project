import React from "react";
import { THEMES } from "../utils/constants/themeConstant";

const initialState = {
  theme: THEMES.DARK.key,
  setTheme: (theme) => {},
};
const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
  const initialState = () => {
    const storedTheme = localStorage.getItem("theme");

    return storedTheme ? JSON.parse(storedTheme) : THEMES.DARK.key;
  };

  const [theme, _setTheme] = React.useState(initialState());

  const setTheme = (theme) => {
    localStorage.setItem("theme", JSON.stringify(theme));
    _setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
