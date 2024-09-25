import { ThemeProvider } from "@mui/material";
import Router from "router/Router";
import { darkTheme, lightTheme } from "constants/theme";
import { useCallback } from "react";
import { useLocalStorage } from "utils/localStorage/localStorage";
const App = () => {
  const [themeValue, setThemeValue] = useLocalStorage("theme", "dark");

  const ThemeHandler = useCallback(() => {
    if (themeValue == "light") {
      setThemeValue("dark");
    } else {
      setThemeValue("light");
    }
  }, [setThemeValue, themeValue]);

  return (
    <ThemeProvider theme={themeValue === "light" ? lightTheme : darkTheme}>
      <Router ThemeHandler={ThemeHandler} />
    </ThemeProvider>
  );
};

export default App;
