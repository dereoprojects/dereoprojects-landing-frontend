"use client";
import styles from "./styles.module.css";

import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PublicIcon from "@mui/icons-material/Public";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Wave from "@/components/Wave/Wave";
import ProjectSection from "./projectSection";

export default function ProjectsPage() {
  const keddyTextArray = [
    "An advanced music personalization application based on recommendations and filtering",
    "Get personalized tracks and playlists by simply sharing how you feel",
    "Curate and filter your favorite music using customizable presets",
    "Host music sessions with friends using selected “Vibes”",
  ];

  return (
    <Container
      component={motion.div}
      maxWidth={false}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <ProjectSection
          title="Keddy"
          url="https://dev.keddy.dereoprojects.com"
          textArray={keddyTextArray}
          animation={<motion.div className={styles["circle-animation"]} />}
        />
      </Box>
    </Container>
  );
}
