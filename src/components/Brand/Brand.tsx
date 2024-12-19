"use client"; // Ensure this is treated as a Client Component

import React from "react";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";

// Import SVGs as React components
import DereoIcon from "../../../public/assets/logo/dereo_icon.svg";
import DereoText from "../../../public/assets/logo/dereo_text.svg";
import BrandIcon from "./BrandIcon";
import { Container } from "@mui/material";

interface BrandProps {
  shining?: boolean;
}

const Brand: React.FC<BrandProps> = ({ shining = false }) => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      {/* Dereo Icon */}
      <Container disableGutters sx={{height: "40px"}}>
        <BrandIcon shining={shining} />
      </Container>
      {/* Dereo Text */}
      <SvgIcon
        component={DereoText} // Pass the SVG component
        inheritViewBox
        fontSize="large"
        sx={{ color: "secondary.main", height: "40px", width: "auto" }}
      />
    </Box>
  );
};

export default Brand;
