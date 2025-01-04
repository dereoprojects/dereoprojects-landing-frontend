import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";
import type { Metadata } from "next";
import "./globals.css";
import ClientRoot from "./ClientRoot";

export const metadata: Metadata = {
  title: "Dereo Projects",
  description: "Dereo Projects",
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
          <ClientRoot>{children}</ClientRoot>
        </ThemeProvider>
      </body>
    </html>
  );
}
