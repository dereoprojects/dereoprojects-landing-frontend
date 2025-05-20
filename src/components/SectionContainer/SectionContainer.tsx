import { Box } from "@mui/material";
import {
  motion,
  MotionValue,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  scrollProgress: MotionValue<number>;
  fadeInStart: number;
  fadeInEnd: number;
  fadeOutStart: number;
  fadeOutEnd: number;
  isHero?: boolean;
}

const SectionContainer = ({
  children,
  id,
  scrollProgress,
  fadeInStart,
  fadeInEnd,
  fadeOutStart,
  fadeOutEnd,
  isHero = false,
}: SectionContainerProps) => {
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollProgress, "change", (latest) => {
    const isVisible = latest >= fadeInStart && latest <= fadeOutEnd;
    setVisible(isVisible);
  });

  useEffect(() => {
    const initial = scrollProgress.get();
    const isVisible = initial >= fadeInStart && initial <= fadeOutEnd;
    setVisible(isVisible);
  }, [fadeInStart, fadeOutEnd, scrollProgress]);

  const opacity = useTransform(
    scrollProgress,
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    [0, 1, 1, 0]
  );

  return (
    <Box
      component={motion.div}
      id={id}
      sx={{
        width: "100%",
        height: {xs: "100vh", md: "100vh"},
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        pt: { xs: "56px", sm: "64px"},
        pointerEvents: visible ? "auto" : "none",
        visibility: visible ? "visible" : "hidden",
      }}
      style={{
        opacity,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: {
            xs: "100%",
            md: "100%",
          },
          padding: "0 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: isHero ? "flex-start" : "center",
          gap: 4,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default SectionContainer;
