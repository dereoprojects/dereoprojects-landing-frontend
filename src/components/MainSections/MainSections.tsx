import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { motion, MotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import HeroSection from "./heroSection";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import ColumnSection from "./columnSection";
import { ColumnSections } from "@/app/constants/sections";

interface MainSectionsProps {
  scrollProgress: MotionValue<number>;
}

const sectionTiming = {
  hero: {
    fadeInStart: 0,
    fadeInEnd: 0,
    fadeOutStart: 0.1,
    fadeOutEnd: 0.35,
  },
  about: {
    fadeInStart: 0.45,
    fadeInEnd: 0.6,
    fadeOutStart: 1.5,
    fadeOutEnd: 1.5,
  },
  projects: {
    fadeInStart: 0.6,
    fadeInEnd: 0.75,
    fadeOutStart: 1.5,
    fadeOutEnd: 1.5,
  },
  contact: {
    fadeInStart: 0.75,
    fadeInEnd: 0.9,
    fadeOutStart: 1.5,
    fadeOutEnd: 1.5,
  },
};

const MainSections = ({ scrollProgress }: MainSectionsProps) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        position: "relative",
        zIndex: 1,
        backgroundColor: "transparent",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HeroSection scrollProgress={scrollProgress} />

        <SectionContainer
          id="content"
          scrollProgress={scrollProgress}
          {...sectionTiming.about}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              justifyContent: {
                xs: "center",
                md: "space-between",
              },
              alignItems: "stretch",
              height: "50%",
              width: "100%",
              gap: 4,
              p: { xs: 0, md: 2 },
            }}
          >
            <ColumnSection
              {...ColumnSections.About}
              scrollProgress={scrollProgress}
              {...sectionTiming.about}
            />

            <ColumnSection
              {...ColumnSections.Projects}
              scrollProgress={scrollProgress}
              {...sectionTiming.projects}
            />

            <ColumnSection
              {...ColumnSections.Contact}
              scrollProgress={scrollProgress}
              {...sectionTiming.contact}
            />
          </Box>
        </SectionContainer>
      </Box>
    </Container>
  );
};

export default MainSections;
