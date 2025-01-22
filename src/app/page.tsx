"use client";

import BrandIcon from "@/components/Brand/BrandIcon";
import BrandText from "@/components/Brand/BrandText";
import BrushStrokeButton from "@/components/BrushStrokeWrappers/BrushStrokeButton";
import MainBrushStrokeWrapper from "@/components/BrushStrokeWrappers/MainBrushStrokeWrapper";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ContactData } from "./constants/contact";


export default function Home() {
  const router = useRouter();

  const [triggerButtonsRender, setTriggerButtonsRender] = useState(false);

  const navigate = (navigateTo: string) => {
    router.push(navigateTo);
  };

  const openCV = () => {
    ; // Adjust the path to match your CV file location
    window.open(ContactData.cvPath, "_blank", "noopener,noreferrer");
  };

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
          <BrushStrokeButton
            text="Projects"
            onClick={() => navigate("/projects")}
            triggerPlay={triggerButtonsRender}
          ></BrushStrokeButton>
          <BrushStrokeButton
            text="About"
            onClick={() => navigate("/about")}
            triggerPlay={triggerButtonsRender}
            playDelay={500}
          ></BrushStrokeButton>
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
                  left: "25%",
                  top: "33%",
                  height: "18%",
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
                  top: "44.3%",
                  left: "59.8%",
                  height: "10.5%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <BrandIcon></BrandIcon>
              </Container>

              <Container
                disableGutters
                sx={{
                  position: "absolute",
                  top: "53%",
                  left: "30%",
                  height: "20%",
                  width: "45%",
                  transform: "rotate(-3deg)",
                }}
              >
                <Typography
                  color="secondary.main"
                  variant="h1"
                  sx={{
                    display: "flex",
                    gap: 0.5,
                    userSelect: "none",
                    fontSize: {
                      xs: "clamp(0.8rem, 10vw, 3rem)",
                      sm: "clamp(1rem, 6vw, 2.5rem)",
                      md: "clamp(1rem, 10vw, 5rem)",
                    },
                  }}
                >
                  {"Projects".split("").map((char, index, arr) => (
                    <motion.span
                      key={index}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      onAnimationComplete={() => {
                        if (index === arr.length - 1) {
                          setTriggerButtonsRender(true);
                        }
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 2 + index * 0.1, // Delay each letter
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
          <BrushStrokeButton
            text="Contact"
            onClick={() => navigate("/contact")}
            triggerPlay={triggerButtonsRender}
            reversed
          ></BrushStrokeButton>
          <BrushStrokeButton
            text="CV"
            onClick={() => openCV()}
            triggerPlay={triggerButtonsRender}
            playDelay={500}
            reversed
          ></BrushStrokeButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          width: "100%",
          flexGrow: 1,
          flexDirection: "column",
          padding: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "50%",
            flexDirection: "row",
            gap: 3,
            
          }}
        >
          <BrushStrokeButton
            text="Projects"
            onClick={() => navigate("/projects")}
            triggerPlay={triggerButtonsRender}
          ></BrushStrokeButton>
          <BrushStrokeButton
            text="About"
            onClick={() => navigate("/about")}
            triggerPlay={triggerButtonsRender}
            playDelay={500}
            reversed
          ></BrushStrokeButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            height: "50%",
            flexDirection: "row",
            gap: 3,
            pb: 3,
          }}
        >
          <BrushStrokeButton
            text="Contact"
            onClick={() => navigate("/contact")}
            triggerPlay={triggerButtonsRender}
          ></BrushStrokeButton>
          <BrushStrokeButton
            text="CV"
            onClick={() => openCV()}
            triggerPlay={triggerButtonsRender}
            playDelay={500}
            reversed
          ></BrushStrokeButton>
        </Box>
      </Box>
    </Container>
  );
}
