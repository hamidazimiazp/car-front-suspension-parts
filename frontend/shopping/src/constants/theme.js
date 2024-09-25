import { createTheme } from "@mui/material";

// Color palette for car front suspension parts
const paletteColors = {
  mode: "light",
  primary: {
    main: "#236E70", // Deep blue for primary color (professional, reliable)
    contrastText: "#ffffff", // White text for visibility
  },
  secondary: {
    main: "#b0bec5", // Metallic light gray (elegant, modern)
    contrastText: "#343a40", // Darker text for contrast
  },
  success: {
    main: "#4caf50", // Mechanic green
    contrastText: "#ffffff", // White text for success
  },
  warning: {
    main: "#ffeb3b", // Caution yellow
    contrastText: "#000000", // Black text for contrast
  },
  error: {
    main: "#f44336", // Red for danger
    contrastText: "#ffffff", // White text for errors
  },
  info: {
    main: "#2196f3", // Blue for informational elements
    contrastText: "#ffffff", // White text for info
  },
  background: {
    paper: "#e0f7fa", // Light blue-gray for card backgrounds (clean, technical look)
    default: "#fafafa", // Soft off-white for general background
  },
  text: {
    primary: "#1e1e1e", // Dark gray for primary text (better readability)
    secondary: "#424242", // Medium gray for secondary text
  },
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
      paper: "#ffffff", // Keep a clean white for cards
      default: "#f0f0f0", // Slightly off-white for general background
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
      main: "#333333", // Dark gray for primary color (durability)
      contrastText: "#ffffff", // White text for contrast
    },
    secondary: {
      main: "#ffa726", // Retaining safety orange for accents
      contrastText: "#ffffff", // White text for contrast
    },
    success: {
      main: "#66bb6a", // Light mechanic green for success
    },
    warning: {
      main: "#ffeb3b", // Caution yellow for warnings
      contrastText: "#000000", // Black text for contrast
    },
    error: {
      main: "#ef5350", // Lighter red for errors
      contrastText: "#ffffff", // White text for errors
    },
    info: {
      main: "#42a5f5", // Lighter blue for info
      contrastText: "#ffffff", // White text for info
    },
    background: {
      paper: "#1e1e1e", // Dark gray for card background
      default: "#121212", // Near-black for general background
    },
  },
});

export { lightTheme, darkTheme };
