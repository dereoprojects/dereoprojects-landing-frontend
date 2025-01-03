"use client";

import React from "react";
import { Container } from "@mui/material";
import { motion } from "framer-motion";
import Wave from "@/components/Wave/Wave";
import AboutSection from "./aboutSection";

import { AboutSections } from "../constants/sections";


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
      {AboutSections.map((section, index) => (
        <React.Fragment key={index}>
          <AboutSection
            title={section.title}
            icon={section.icon}
            text={section.text}
            img={section.img}
            reversed={section.reversed}
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
