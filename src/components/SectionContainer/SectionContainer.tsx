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
}

const SectionContainer = ({
  children,
  id,
  scrollProgress,
  fadeInStart,
  fadeInEnd,
  fadeOutStart,
  fadeOutEnd,
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
  }, []);

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
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pt: { xs: 12, sm: 7},
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
            xs: "80%",
            md: "60%",
          },
          padding: "0 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default SectionContainer;
