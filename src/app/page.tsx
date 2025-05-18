"use client";

import { Box } from "@mui/material";
import { useScroll } from "framer-motion";
import MainSections from "@/components/MainSections/MainSections";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "400vh",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <MainSections scrollProgress={scrollYProgress} />
      </Box>
    </Box>
  );
}
