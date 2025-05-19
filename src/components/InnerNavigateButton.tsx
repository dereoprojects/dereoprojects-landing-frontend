import React, { useState } from "react";
import { Typography, Box, Link as MuiLink } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

interface InnerNavigateButtonProps {
  navigate: string;
  label: string;
  icon?: React.ReactNode;
  reversed?: boolean;
}

const InnerNavigateButton: React.FC<InnerNavigateButtonProps> = ({
  navigate,
  label,
  icon,
}) => {
  const [hovered, setHovered] = useState(false);
  const [tapped, setTapped] = useState(false);

  return (
    <Box
      component={motion.div}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
      animate={{
        scale: hovered ? (tapped ? 0.95 : 1.05) : 1,
      }}
      transition={{ duration: 0.2 }}
      onHoverStart={() => {
        setHovered(true);
      }}
      onHoverEnd={() => {
        setHovered(false);
      }}
      onTapStart={() => {
        setTapped(true);
      }}
      onTap={() => {
        setTapped(false);
      }}
      onTapCancel={() => {
        setTapped(false);
      }}
    >
      <MuiLink
        component={Link}
        href={navigate}
        passHref
        underline="hover"
        color= "primary"
      >
        <Typography variant="h5" color="primary" noWrap>
          {label}
        </Typography>
      </MuiLink>

      <Box
        component={motion.div}
        animate={{
          transform: hovered || tapped ? "rotate(15deg)" : "rotate(0deg)",
        }}
        transition={{ duration: 0.2 }}
        sx={{display: "flex", justifyContent: "center"}}
      >
        {icon}
      </Box>
    </Box>
  );
};

export default InnerNavigateButton;
