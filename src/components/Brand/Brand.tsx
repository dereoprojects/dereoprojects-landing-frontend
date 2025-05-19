"use client";

import React from "react";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";

import DereoText from "../../../public/assets/logo/dereo_text.svg";
import BrandIcon from "./BrandIcon";
import { Container } from "@mui/material";

interface BrandProps {
  shining?: boolean;
  color?: string;
  size?: number;
}

const Brand: React.FC<BrandProps> = ({ 
  shining = false, 
  color = "primary.main",
  size = 40 
}) => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      {/* Dereo Icon */}
      <Container disableGutters sx={{ height: `${size}px` }}>
        <BrandIcon shining={shining} />
      </Container>
      {/* Dereo Text */}
      <SvgIcon
        component={DereoText}
        inheritViewBox
        fontSize="large"
        sx={{ color: color, height: `${size}px`, width: "auto" }}
      />
    </Box>
  );
};

export default Brand;
