"use client";
import styles from "./styles.module.css";

import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PublicIcon from "@mui/icons-material/Public";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Wave from "@/components/Wave/Wave";
import AboutSection from "./aboutSection";

export default function AboutPage() {
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
      }}
    >
      {/* Section 1: Who I Am */}
      <AboutSection
        title="Who I Am"
        icon={
          <EmojiPeopleIcon fontSize="large" sx={{ color: "primary.main" }} />
        }
        text="Hi, I’m Oguzhan Dere, a software developer passionate about creating user-friendly applications and exploring the endless possibilities of technology."
        animation={<motion.div className={styles["circle-animation"]} />}
      />
      <Wave color="primary.main" backgroundColor="secondary.main"></Wave>
      {/* Section 2: What This Page Is For */}
      <AboutSection
        reversed
        title="What This Page is For"
        icon={<PublicIcon fontSize="large" sx={{ color: "secondary.main" }} />}
        text="This page serves as my digital portfolio and a place where I share my thoughts, hobbies, and aspirations. It's a glimpse into my journey and what inspires me."
        animation={<motion.div className={styles["circle-animation"]} />}
      />

      <Wave
        selectedWave={1}
        color="secondary.main"
        backgroundColor="primary.main"
      ></Wave>

      {/* Section 3: My Ideals */}
      <AboutSection
        title="My Ideals and What I Aim in Life"
        text="I believe in continuous learning, creating a positive impact through technology, and fostering meaningful connections. My goal is to contribute to innovative solutions that make life better."
        animation={<motion.div className={styles["circle-animation"]} />}
      />
      <Wave
        selectedWave={2}
        color="primary.main"
        backgroundColor="secondary.main"
      ></Wave>

      {/* Section 4: Hobbies */}
      <AboutSection
        reversed
        title="Hobbies"
        icon={
          <FavoriteIcon fontSize="large" sx={{ color: "secondary.main" }} />
        }
        text="In my free time, I enjoy creating music, dancing to my favorite tunes, and exploring new creative outlets. These activities fuel my imagination and keep me energized."
        animation={<motion.div className={styles["circle-animation"]} />}
      />
    </Container>
  );
}
