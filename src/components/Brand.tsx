"use client"; // Ensure this is treated as a Client Component

import React from "react";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";

// Import SVGs as React components
import DereoIcon from "../../public/assets/logo/dereo_icon.svg";
import DereoText from "../../public/assets/logo/dereo_text.svg";

const Brand: React.FC = () => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      {/* Dereo Icon */}
      <SvgIcon
        component={DereoIcon} // Pass the SVG component
        inheritViewBox
        fontSize="large"
        sx={{ color: "secondary.main", height: "40px", width: "auto" }}
      />
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
