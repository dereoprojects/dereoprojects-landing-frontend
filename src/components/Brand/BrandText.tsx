import React from "react";
import { Container, SvgIcon, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import DereoText from "../../../public/assets/logo/dereo_text.svg";


const BrandText = () => {
  const theme = useTheme();

  return (
    <Container sx={{ height: "100%", width: "auto" }} disableGutters>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 554 188"
        style={{
          height: "100%",
          width: "auto",
          fill: "none",
        }}
      >
        <SvgIcon
          component={DereoText} // Pass the SVG component
          inheritViewBox
          fontSize="large"
          sx={{ color: "secondary.main", height: "40px", width: "auto" }}
        />
      </motion.svg>
    </Container>
  );
};

export default BrandText;
