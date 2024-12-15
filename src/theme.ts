"use client";
import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles/createPalette" {
  interface Palette {
    accent: Palette["primary"];
  }
  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }
}
const theme = createTheme({
  palette: {
    primary: {
      main: "#5C3C35", // Custom primary color
    },
    secondary: {
      main: "#F8D8BA", // Custom secondary color
    },
    accent: {
      main: "#FFD700", // Added gold as an accent color
    },
    background: {
      default: "#F8D8BA", // Background color
      paper: "#5C3C35", // Paper components color
    },
    text: {
      primary: "#5C3C35", // Text color
      secondary: "#F8D8BA",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
  },
});

export default theme;
