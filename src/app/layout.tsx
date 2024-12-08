// src/app/layout.tsx
import * as React from "react";
import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import Link from "next/link";
import theme from "../theme"; // Your custom Material-UI theme
import type { Metadata } from "next";
import "./globals.css";
import Brand from "@/components/Brand";
import ResponsiveAppBar from "@/components/ResponsiveAppBar";

export const metadata: Metadata = {
  title: "Dereoprojects Landing",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ResponsiveAppBar>

          </ResponsiveAppBar>
          
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
