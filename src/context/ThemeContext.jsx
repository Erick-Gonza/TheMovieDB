import { useState, useEffect, createContext } from "react";

export const themeContext = createContext();
const { Provider } = themeContext;

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList.add(theme);
  }, [theme]);

  const changeTheme = () => {
    if (theme === "light") {
      document.body.classList.remove("light");
      setTheme("dark");
    } else {
      document.body.classList.remove("dark");
      setTheme("light");
    }
  };

  const handleClick = () => {
    changeTheme();
  };

  const themeSession = {
    handleClick,
    theme,
  };

  return <Provider value={themeSession}>{children}</Provider>;
};

export default ThemeContext;
