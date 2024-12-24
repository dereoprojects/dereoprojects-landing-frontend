"use client";

import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  Button,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Brand from "@/components/Brand/Brand";
import { motion } from "framer-motion";
import Link from "next/link";
import AppbarNavigation from "./AppbarNavigation";
interface ResponsiveAppBarProps {
  drawerChange: (open: boolean) => void; // Define drawerChange as a function type
  isDrawerOpen: boolean;
}
const ResponsiveAppBar: React.FC<ResponsiveAppBarProps> = ({
  drawerChange,
  isDrawerOpen,
}) => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    "up"
  );
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: scrollDirection === "up" ? 0 : -100, // Slide down or up
        opacity: scrollDirection === "up" ? 1 : 0, // Fade in or out
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ position: "sticky", top: 0, zIndex: 1400, width: "100%" }}
    >
      <AppBar
        position="fixed"
        sx={{ display: "flex", flexDirection: "row" }}
        color="primary"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Menu Icon for Drawer (only visible on small screens) */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => drawerChange(!isDrawerOpen)}
            sx={{
              display: { xs: "block", sm: "none" },
              position: "absolute",
              left: 8,
            }}
          >
            {isDrawerOpen ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>

          <Box
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: { xs: "55%", sm: "100%" },
            }}
            onClick={() => drawerChange(false)}
          >
            <Link href="/">
              <Brand shining />
            </Link>
          </Box>

          {/* Buttons for larger screens */}
          <Box
            sx={{
              height: "100%",
              display: { xs: "none", sm: "flex" },
              flexDirection: "row",
            }}
          >
            <AppbarNavigation
              text="Projects"
              value="/projects"
            ></AppbarNavigation>
            <AppbarNavigation text="About" value="/about"></AppbarNavigation>
            <AppbarNavigation
              text="Contact"
              value="/contact"
            ></AppbarNavigation>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default ResponsiveAppBar;
