"use client";

import React from "react";
import { Drawer, Box, Button, Container, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

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
        <Box sx={{ width: 200, padding: 2 }}>
          <Button
            component={Link}
            color="secondary"
            href="/about"
            onClick={() => drawerChange(false)}
            fullWidth
          >
            About
          </Button>
          <Button
            component={Link}
            color="secondary"
            href="/contact"
            onClick={() => drawerChange(false)}
            fullWidth
          >
            Contact
          </Button>
        </Box>
      </Drawer>
    </Container>
  );
};

export default MainWithDrawer;
