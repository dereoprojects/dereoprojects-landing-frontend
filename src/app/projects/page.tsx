"use client";

import React from "react";
import { Container } from "@mui/material";
import { motion } from "framer-motion";
import Wave from "@/components/Wave/Wave";
import ProjectSection from "./projectSection";
import { ProjectSections } from "../constants/sections";

export default function ProjectsPage() {
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
        overflowY: "scroll"
      }}
    >
      {ProjectSections.map((section, index, array) => (
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
