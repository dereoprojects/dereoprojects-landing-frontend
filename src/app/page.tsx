"use client";

import BrushStrokeWrapper from "@/components/BrushStrokeWrapper/BrushStrokeWrapper";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Home() {
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
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box sx={{ width: "100%", height: "70vh", marginTop: "50px",}}>
        <BrushStrokeWrapper>
          <Typography color="secondary" variant="h3">Home page</Typography>
          <Typography color="secondary" variant="h4">Welcome to home page!</Typography>
        </BrushStrokeWrapper>
      </Box>
    </Container>
  );
}
