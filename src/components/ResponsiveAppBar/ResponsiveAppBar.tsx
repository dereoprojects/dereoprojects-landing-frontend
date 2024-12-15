"use client";

import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Brand from "@/components/Brand/Brand";
import { motion } from "framer-motion";
import Link from "next/link";
interface ResponsiveAppBarProps {
  drawerChange: (open: boolean) => void; // Define drawerChange as a function type
  isDrawerOpen: boolean;
}
const ResponsiveAppBar: React.FC<ResponsiveAppBarProps> = ({drawerChange, isDrawerOpen}) => {
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
      style={{ position: "sticky", top: 0, zIndex: 1400, width: "100%"}}
    >
      <AppBar position="fixed" color="primary">
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
            onClick={() => drawerChange(!isDrawerOpen)}
            sx={{
              display: { xs: "block", sm: "none" },
              position: "absolute",
              left: 8,
            }}
          >
            {isDrawerOpen ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>

          {/* Brand */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: { xs: "55%", sm: "100%" }, //this shit doesnt works
            }}

            onClick={ () => drawerChange(false)}
          >
            <Link href="/">
              <Brand shining />
            </Link>
          </Box>

          {/* Buttons for larger screens */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 2,
            }}
          >
            <Button component={Link} color="inherit" href="/about">
              About
            </Button>
            <Button component={Link} color="inherit" href="/contact">
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
    
  );
};

export default ResponsiveAppBar;
