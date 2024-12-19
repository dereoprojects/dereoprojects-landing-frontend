import { motion } from "framer-motion";
import SvgIcon from "@mui/material/SvgIcon";
// Import SVGs as React components
import DereoIcon from "../../../public/assets/logo/dereo_icon.svg";

export const ShiningIcon = () => (
  <motion.div
    initial={{ opacity: 1, filter: "brightness(100%)" }}
    animate={{
      opacity: [1, 0.8, 1], 
      filter: ["brightness(100%)", "brightness(150%)", "brightness(100%)"], 
    }}
    transition={{
      duration: 3,
      repeat: Infinity, 
      repeatDelay: 10,
      delay: 5,
      ease: "easeInOut",
    }}
    style={{ height: "100%", width: "auto" }}
  >
    <SvgIcon
      component={DereoIcon} 
      inheritViewBox
      fontSize="large"
      sx={{ color: "secondary.main", height: "100%", width: "auto" }}
    />
  </motion.div>
);
