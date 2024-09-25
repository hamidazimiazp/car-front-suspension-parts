import { createTheme } from "@mui/material";

// Color palette for car front suspension parts
const paletteColors = {
  primary: {
    main: "#343a40", // Dark steel gray
    contrastText: "#f5f5f5", // Light text contrast for visibility
  },
  secondary: {
    main: "#ffa726", // Safety orange
    contrastText: "#ffffff", // White text contrast
  },
  success: {
    main: "#4caf50", // Mechanic green
  },
  warning: {
    main: "#ffeb3b", // Yellow for caution
    contrastText: "#000000", // Dark text contrast for warning
  },
  error: {
    main: "#f44336", // Red for danger
    contrastText: "#ffffff", // White text on error
  },
  info: {
    main: "#2196f3", // Blue for informational elements
    contrastText: "#ffffff", // White text on info
  },
  background: {
    paper: "#f0f0f0", // Light gray for card background
    default: "#fafafa", // Slightly off-white for general background
  },
  contrastThreshold: 3, // Adjust contrast for text on backgrounds
  tonalOffset: 0.2, // Slight tonal offset for hover effects
};

const lightTheme = createTheme({
  typography: {
    fontFamily: `"YekanBakh", "Roboto", "Arial"`,
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
    ...paletteColors,
    background: {
      paper: "#f7f7f7", // Light background for cards
      default: "#ffffff", // White general background
    },
  },
});

const darkTheme = createTheme({
  typography: {
    fontFamily: `"YekanBakh", "Roboto", "Arial"`,
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
      main: "#121212", // Dark background
      contrastText: "#ffffff", // Light text
    },
    secondary: {
      main: "#ffa726", // Safety orange
      contrastText: "#ffffff", // White text
    },
    success: {
      main: "#66bb6a", // Light mechanic green for success
    },
    warning: {
      main: "#ffeb3b", // Caution yellow for warnings
      contrastText: "#000000", // Black text
    },
    error: {
      main: "#ef5350", // Lighter red for errors
      contrastText: "#ffffff", // White text
    },
    info: {
      main: "#42a5f5", // Lighter blue for info
      contrastText: "#ffffff", // White text
    },
    background: {
      paper: "#1e1e1e", // Dark gray for card background
      default: "#121212", // Near-black general background
    },
  },
});

export { lightTheme, darkTheme };
