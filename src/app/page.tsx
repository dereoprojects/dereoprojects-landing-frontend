"use client";

import Brand from "@/components/Brand/Brand";
import BrandIcon from "@/components/Brand/BrandIcon";
import BrandText from "@/components/Brand/BrandText";
import MainBrushStrokeWrapper from "@/components/BrushStrokeWrappers/MainBrushStrokeWrapper";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box sx={{ width: "100%", height: "70vh", marginTop: 1 }}>
        <MainBrushStrokeWrapper>
          <Container
            disableGutters
            sx={{
              width: "100%",
              height: "100%",
              position: "relative", // Ensure child items are positioned relative to this container
            }}
          >
            <Container
              sx={{
                position: "absolute",
                left: "2%",
                top: "9%",
                height: "10%",
                width: "fit-content",
              }}
              disableGutters
            >
              <BrandText />
            </Container>

            <Container
              disableGutters
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                height: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <BrandIcon shining></BrandIcon>
            </Container>

            <Container
            id="test"
              disableGutters
              sx={{
                position: "absolute",
                top: "70%",
                left: "60%",
                height: "20%",
                width: "45%",
                transform: "rotate(-30deg)",
              }}
            >
              <Typography
                color="primary.main"
                variant="h1"
                sx={{ display: "flex", gap: 0.5, fontSize: "clamp(1rem, 12vw, 5rem)"}}
              >
                {"Projects".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 50, opacity: 0}}
                    animate={{ y: 0, opacity: 1}}
                    transition={{
                      duration: 0.5,
                      delay: 4.5 + index * 0.1, // Delay each letter
                    }}
                    style={{ display: "inline-block" }} // Ensures no extra line breaks
                  >
                    {char}
                  </motion.span>
                ))}
              </Typography>
            </Container>
          </Container>
        </MainBrushStrokeWrapper>
      </Box>
    </Container>
  );
}
