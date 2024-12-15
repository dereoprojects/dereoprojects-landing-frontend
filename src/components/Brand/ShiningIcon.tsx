import { motion } from "framer-motion";
import SvgIcon from "@mui/material/SvgIcon";
// Import SVGs as React components
import DereoIcon from "../../../public/assets/logo/dereo_icon.svg";

export const ShiningIcon = () => (
  <motion.div
    initial={{ opacity: 1, filter: "brightness(100%)" }} // Normal state
    animate={{
      opacity: [1, 0.8, 1], // Normal, fade slightly, return to normal
      filter: ["brightness(100%)", "brightness(150%)", "brightness(100%)"], // Normal -> Glow -> Normal
    }}
    transition={{
      duration: 3, // Glow lasts for 3 seconds
      repeat: Infinity, // Loop indefinitely
      repeatDelay: 17, // Wait 17 seconds after each glow
      ease: "easeInOut", // Smooth transitions
    }}
    style={{ height: "40px", width: "auto" }}
  >
    <SvgIcon
      component={DereoIcon} // Pass the SVG component
      inheritViewBox
      fontSize="large"
      sx={{ color: "secondary.main", height: "100%", width: "auto" }}
    />
  </motion.div>
);
