"use client";

import React, { useEffect } from "react";
import { Drawer, Box, Container, Toolbar } from "@mui/material";
import AppbarNavigation from "@/components/ResponsiveAppBar/AppbarNavigation";
import VantaBackground from "@/components/VantaBackground/VantaBackground";

interface MainWithDrawerProps {
  children: React.ReactNode;
  drawerOpen: boolean;
  drawerChange: (open: boolean) => void;
}

const MainWithDrawer: React.FC<MainWithDrawerProps> = ({
  children,
  drawerOpen,
  drawerChange,
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
      <Drawer
        sx={{
          "& .MuiDrawer-root": {
            position: "absolute",
          },
          "& .MuiPaper-root": {
            position: "absolute",
          },
        }}
        anchor="left"
        open={drawerOpen}
        onClose={() => drawerChange(false)}
      >
        <Toolbar sx={{ width: 0 }}></Toolbar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 2,
            gap: 2,
            width: "50vw !important",
          }}
        >
          <Box onClick={() => drawerChange(false)}>
            <AppbarNavigation
              text="Projects"
              value="/projects"
            ></AppbarNavigation>
          </Box>
          <Box onClick={() => drawerChange(false)}>
            <AppbarNavigation text="About" value="/about"></AppbarNavigation>
          </Box>
          <Box onClick={() => drawerChange(false)}>
            <AppbarNavigation
              text="Contact"
              value="/contact"
            ></AppbarNavigation>
          </Box>
        </Box>
      </Drawer>
    </Container>
  );
};

export default MainWithDrawer;
