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
      paper: '#FFFFFF',   // Paper components color
    },
    text: {
      primary: '#3C2F2F', // Text color
      secondary: '#7B5045',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
  },
});

export default theme;
