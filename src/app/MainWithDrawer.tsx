"use client";

import React from "react";
import { Drawer, Box, Button, Container, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import AppbarNavigation from "@/components/ResponsiveAppBar/AppbarNavigation";

interface MainWithDrawerProps {
  children: React.ReactNode;
  drawerOpen: boolean;
  drawerChange: (open: boolean) => void; // Define drawerChange as a function type
}

const MainWithDrawer: React.FC<MainWithDrawerProps> = ({
  children,
  drawerOpen,
  drawerChange,
}) => {
  return (
    <Container
      component="main"
      disableGutters
      sx={{
        height: { xs: "calc( 100vh - 56px )", sm: "calc( 100vh - 64px )" },
      }}
      maxWidth={false}
    >
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
