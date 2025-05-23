"use client";

import React from "react";
import { alpha, Box, Container, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Wave from "@/components/Wave/Wave";
import ProjectSection from "./projectSection";
import { ProjectSections } from "../constants/sections";

export default function ProjectsPage() {
  const theme = useTheme();
  const projectSections = ProjectSections(theme);
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
        overflowY: "scroll",
      }}
    >
      <Box sx={{ height: { xs: "56px", sm: "64px" }, width: "100%", backgroundColor: alpha(theme.palette.secondary.main, 0.7) }} />
      {projectSections.map((section, index, array) => (
        <React.Fragment key={index}>
          <ProjectSection
            title={section.title}
            icon={section.icon}
            text={section.text}
            component={section.component}
            reversed={section.reversed}
            last={array.length - 1 === index}
          />
          {section.wave && (
            <Wave
              color={section.wave.color}
              backgroundColor={section.wave.backgroundColor}
              selectedWave={section.wave.selectedWave}
            />
          )}
        </React.Fragment>
      ))}
    </Container>
  );
}
