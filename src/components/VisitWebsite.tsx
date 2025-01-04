import React, { useState } from "react";
import { Typography, Box, Link as MuiLink } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { motion } from "framer-motion";

interface VisitWebsiteProps {
  url: string;
  label: string;
  reversed?: boolean;
}

const VisitWebsite: React.FC<VisitWebsiteProps> = ({
  url,
  label,
  reversed = false,
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
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        underline="hover"
      >
        <Typography variant="h5" color={reversed ? "secondary" : "primary"} noWrap>
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
        <OpenInNewIcon
          color={reversed ? "secondary" : "primary"}
          fontSize="small"
        />
      </Box>
    </Box>
  );
};

export default VisitWebsite;
