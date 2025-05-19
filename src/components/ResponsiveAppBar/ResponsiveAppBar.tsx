"use client";

import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Box, useMediaQuery } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles"; // Add this import
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Brand from "@/components/Brand/Brand";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AppbarNavigation from "./AppbarNavigation";

interface ResponsiveAppBarProps {}

const ResponsiveAppBar: React.FC<ResponsiveAppBarProps> = ({}) => {
  const theme = useTheme(); // Access the theme
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerChange = (value: boolean) => {
    setIsDrawerOpen(value);
  };

  /*
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
*/
  return (
    <Box style={{ position: "fixed", top: 0, zIndex: 1400, width: "100%" }}>
      <AppBar
        position="fixed"
        sx={{
          display: "flex",
          flexDirection: "row",
          background: alpha(theme.palette.secondary.main, 0.3),
          backdropFilter: "blur(10px) saturate(115%)",
          WebkitBackdropFilter: "blur(10px) saturate(115%)",
          borderBottom: "0.5px solid rgba(255, 255, 255, 0.18)",
        }}
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
            {isDrawerOpen ? (
              <MenuOpenIcon sx={{ color: theme.palette.primary.main }} />
            ) : (
              <MenuIcon sx={{ color: theme.palette.primary.main }} />
            )}
          </IconButton>

          <AnimatePresence mode="wait">
            <Box
              key="brand"
              sx={{
                position: "absolute",
                left: { xs: "50%", sm: "10px" },
                top: "10px",
                transform: { xs: "translateX(-50%)", sm: "none" },
                justifyContent: "center",
                alignItems: "center",
                height: { xs: "55%", sm: "100%" },
                opacity: isDrawerOpen ? 0 : 1,
                pointerEvents: isDrawerOpen ? "none" : "auto",
                transition: isDrawerOpen 
                  ? "opacity 0.1s ease-in-out"  // Faster when hiding
                  : "opacity 0.3s ease-in-out 0.1s",  // Slower when showing, with delay
              }}
            >
              <Box
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => drawerChange(false)}
              >
                <Link 
                  href="/"
                  style={{ 
                    textDecoration: 'none',
                    WebkitTapHighlightColor: 'transparent',
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  }}
                >
                  <Brand />
                </Link>
              </Box>
            </Box>
          </AnimatePresence>

          {/* Mobile Navigation */}
          <AnimatePresence mode="wait">
            <Box
              component={motion.div}
              key="mobile-navigation"
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: isDrawerOpen ? 1 : 0,
                y: isDrawerOpen ? 0 : -20,
              }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              sx={{
                height: "100%",
                display: { xs: "flex", sm: "none" },
                flexDirection: "row",
                position: "absolute",
                left: "auto",
                top: "0px",
                pointerEvents: isDrawerOpen ? "auto" : "none",
              }}
            >
              <AppbarNavigation text="About" value="/about"></AppbarNavigation>
              <AppbarNavigation
                text="Projects"
                value="/projects"
              ></AppbarNavigation>
              <AppbarNavigation
                text="Contact"
                value="/contact"
              ></AppbarNavigation>
            </Box>
          </AnimatePresence>

          {/* Desktop Navigation */}
          <Box
            sx={{
              height: "100%",
              display: { xs: "none", sm: "flex" },
              flexDirection: "row",
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
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
    </Box>
  );
};

export default ResponsiveAppBar;
