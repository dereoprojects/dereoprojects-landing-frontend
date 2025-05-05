"use client";

import React from "react";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles"; // Add this import
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Brand from "@/components/Brand/Brand";
import { motion } from "framer-motion";
import Link from "next/link";
import AppbarNavigation from "./AppbarNavigation";

interface ResponsiveAppBarProps {
  drawerChange: (open: boolean) => void;
  isDrawerOpen: boolean;
}
const ResponsiveAppBar: React.FC<ResponsiveAppBarProps> = ({
  drawerChange,
  isDrawerOpen,
}) => {
  const theme = useTheme(); // Access the theme

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
              <Brand />
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
    </Box>
  );
};

export default ResponsiveAppBar;
