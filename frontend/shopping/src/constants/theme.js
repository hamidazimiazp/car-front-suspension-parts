import { createTheme } from "@mui/material";

// https://mui.com/material-ui/customization/theming/

const lightTheme = createTheme({
  typography: {
    fontFamily: `"YekanBakh", "roboto", "Arial"`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightHeavy: 800,
    fontWeightFat: 900,
    fontSize: 14,
  },
  direction: "rtl",
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  typography: {
    fontFamily: `"YekanBakh", "roboto", "Arial"`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightHeavy: 800,
    fontWeightFat: 900,
    fontSize: 14,
  },
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#121212",
    },
  },
});

export { lightTheme, darkTheme };
