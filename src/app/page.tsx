"use client";

import Brand from "@/components/Brand/Brand";
import BrandIcon from "@/components/Brand/BrandIcon";
import BrandText from "@/components/Brand/BrandText";
import BrushStrokeButton from "@/components/BrushStrokeWrappers/BrushStrokeButton";
import ButtonBrushStrokeWrapper from "@/components/BrushStrokeWrappers/ButtonBrushStrokeWrapper";
import MainBrushStrokeWrapper from "@/components/BrushStrokeWrappers/MainBrushStrokeWrapper";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Container
      component={motion.div}
      maxWidth={false}
      initial={{ opacity: 1 }}
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
      <Box
        sx={{
          height: {
            sm: "100%",
            xs: "50%",
          },
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: { sm: "flex", xs: "none" },
            flexDirection: "column",
            flex: 1,
            padding: 1,
          }}
        >
          <BrushStrokeButton text="Projects"></BrushStrokeButton>
          <BrushStrokeButton text="About"></BrushStrokeButton>
        </Box>
        <Box sx={{ flex: { xs: 2, md: 5 }, height: "100%" }}>
          <MainBrushStrokeWrapper>
            <Container
              disableGutters
              sx={{
                width: "100%",
                height: "100%",
                position: "relative", // Ensure child items are positioned relative to this container
                overflow: "hidden",
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
                  sx={{
                    display: "flex",
                    gap: 0.5,
                    userSelect: "none",
                    fontSize: {
                      xs: "clamp(1rem, 12vw, 4rem)",
                      sm: "clamp(1rem, 10vw, 4rem)",
                    },
                  }}
                >
                  {"Projects".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
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
        <Box
          sx={{
            display: { sm: "flex", xs: "none" },
            flexDirection: "column",
            flex: 1,
            padding: 1,
          }}
        >
          <BrushStrokeButton text="Contact" reversed></BrushStrokeButton>
          <BrushStrokeButton text="Download CV" reversed></BrushStrokeButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          width: "100%",
          flexGrow: 1,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "50%",
            flexDirection: "row",
            padding: 3,
          }}
        >
          <BrushStrokeButton text="Projects"></BrushStrokeButton>
          <BrushStrokeButton text="About" reversed></BrushStrokeButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            height: "50%",
            flexDirection: "row",
            padding: 3,
          }}
        >
          <BrushStrokeButton text="Contact"></BrushStrokeButton>
          <BrushStrokeButton text="Download CV" reversed></BrushStrokeButton>
        </Box>
      </Box>
    </Container>
  );
}
