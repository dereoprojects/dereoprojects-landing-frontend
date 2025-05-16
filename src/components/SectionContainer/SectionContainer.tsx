import { Box } from "@mui/material";
import { motion, MotionValue, useTransform } from "framer-motion";

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
        pt: 7,
      }}
      style={{
        opacity
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: {
            xs: "80%",
            md: "60%"
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