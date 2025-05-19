"use client";

import React, { useEffect } from "react";
import { Container } from "@mui/material";
import VantaBackground from "@/components/VantaBackground/VantaBackground";

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({
  children
}) => {
  useEffect(() => {
    const updateViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    updateViewportHeight();
    window.addEventListener("resize", updateViewportHeight);

    return () => {
      window.removeEventListener("resize", updateViewportHeight);
    };
  }, []);

  return (
    <Container
      component="main"
      disableGutters
      sx={{
        height: "calc(var(--vh, 1vh) * 100)",
        //paddingTop: { xs: "56px", sm: "64px" },
      }}
      maxWidth={false}
    >
      <VantaBackground />
      {children}
    </Container>
  );
};

export default Main;
