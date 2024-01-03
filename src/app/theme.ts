'use client'

import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
      fontFamily: [
        "Montserrat",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      h4: {
        fontSize: 32,
      },
    },
    palette: {
      background: {
        default: "#7E7E7E"
      },
      mode: "light",
      primary: {
        main: "#202020",
        dark: "#25AD62",
        contrastText: "#fff",
      },
      secondary: {
        main: "#CACACA",
        dark: "#4A4A4A"
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 700,
        md: 900,
        lg: 1200,
        xl: 1600,
      },
    },
  });

