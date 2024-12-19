"use client";
import { createTheme } from "@mui/material/styles";
import { Courgette, Poppins, Water_Brush } from "next/font/google";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    accent: Palette["primary"];
  }
  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }
}

const waterBrush = Water_Brush({ subsets: ["latin"], weight: "400" });
const courgette = Courgette({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

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
    fontFamily: `${poppins.style.fontFamily}, Arial, sans-serif`,
    h1: {
      fontFamily: waterBrush.style.fontFamily,
      fontSize: "5rem",
    },
    h2: {
      fontFamily: waterBrush.style.fontFamily,
      fontSize: "3.5rem",
    },
    h3: {
      fontFamily: courgette.style.fontFamily,
      fontSize: "2.4rem",
      fontWeight: "bold"
    },
    body1: {
      fontFamily: courgette.style.fontFamily,
      fontSize: "1rem",
    },
    body2: {
      fontFamily: courgette.style.fontFamily,
      fontSize: "0.875rem",
    },
  },
});

export default theme;
