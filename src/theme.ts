"use client";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5C3C35', // Custom primary color
    },
    secondary: {
      main: '#F8D8BA', // Custom secondary color
    },
    background: {
      default: '#F8D8BA', // Background color
      paper: '#5C3C35',   // Paper components color
    },
    text: {
      primary: '#5C3C35', // Text color
      secondary: '#F8D8BA',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
  },
});

export default theme;
