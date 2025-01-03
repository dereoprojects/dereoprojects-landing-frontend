"use client";

import React, { useState } from "react";

import { Box, Container, Typography } from "@mui/material";
import ButtonBrushStrokeWrapper from "./ButtonBrushStrokeWrapper";
import { motion } from "framer-motion";

interface BrushStrokeButtonProps {
  text?: string;
  reversed?: boolean;
  onClick?: () => void;
  triggerPlay?: boolean;
  playDelay?: number;
}

const BrushStrokeButton: React.FC<BrushStrokeButtonProps> = ({
  text = "",
  reversed = false,
  triggerPlay = false,
  playDelay = 0, // Default no delay
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);
  const [tapped, setTapped] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
      component={motion.div}
      animate={{
        scale: hovered ? (tapped ? 0.95 : 1.05) : 1,
      }}
      transition={{ duration: 0.2 }}
    >
      <ButtonBrushStrokeWrapper
        triggerPlay={triggerPlay}
        playDelay={playDelay}
        reversed={reversed}
      >
        <Container
          disableGutters
          component={motion.div}
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
          onClick={onClick}
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            overflow: "hidden",
            "&:hover": {
              ".hover-text": {
                color: "accent.main", // Change Typography color when parent is hovered
              },
              cursor: "pointer",
            },
          }}
        >
          <Container
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            disableGutters
          >
            <Typography
              color="secondary.main"
              className="hover-text"
              variant="h1"
              sx={{
                userSelect: "none",
                fontSize: {
                  xs: "clamp(0.8rem, 5vw, 2rem)",
                  sm: "clamp(0.8rem, 3vw, 2rem)",
                  md: "clamp(0.8rem, 2.3vw, 2rem)",
                },
              }}
            >
              {text}
            </Typography>
          </Container>
        </Container>
      </ButtonBrushStrokeWrapper>
    </Box>
  );
};

export default BrushStrokeButton;
