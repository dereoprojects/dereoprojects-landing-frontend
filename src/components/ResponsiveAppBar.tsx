"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brand from "@/components/Brand";

const ResponsiveAppBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setDrawerOpen(open);
    };

  return (
    <AppBar position="static" color="primary">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: "center",
        }}
      >
        {/* Menu Icon for Drawer (only visible on small screens) */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{
            display: { xs: "block", sm: "none" },
            position: "absolute",
            left: 8,
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Brand */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="/">
            <Brand />
          </a>
        </Box>

        {/* Buttons for larger screens */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: 2,
          }}
        >
          <Button color="inherit" href="/about">
            About
          </Button>
          <Button color="inherit" href="/contact">
            Contact
          </Button>
        </Box>
      </Toolbar>

      {/* Drawer for small screens */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, padding: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Button color="secondary" href="/about" fullWidth>
            About
          </Button>
          <Button color="secondary" href="/contact" fullWidth>
            Contact
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default ResponsiveAppBar;
