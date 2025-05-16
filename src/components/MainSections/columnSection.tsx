import { Box, Typography, Button } from "@mui/material";
import { motion, MotionValue, useTransform } from "framer-motion";
import Link from "next/link";

interface ColumnSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  scrollProgress: MotionValue<number>;
  fadeInStart: number;
  fadeInEnd: number;
  fadeOutStart: number;
  fadeOutEnd: number;
}

const ColumnSection = ({
  title,
  description,
  buttonText,
  buttonLink,
  scrollProgress,
  fadeInStart,
  fadeInEnd,
  fadeOutStart,
  fadeOutEnd,
}: ColumnSectionProps) => {
  return (
    <Box
      component={motion.div}
      style={{
        opacity: useTransform(
          scrollProgress,
          [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
          [0, 1, 1, 0]
        ),
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: {
          xs: "auto",
          md: "100%",
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: {
            xs: "center",
            md: "flex-start",
          },
          textAlign: {
            xs: "center",
            md: "left",
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 1, md: 3 } }}>
          <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 32 } }}>{title}</Typography>
          <Typography sx={{ fontSize: { xs: 16, md: 18 } }}>{description}</Typography>
        </Box>
        <Button
          component={Link}
          href={buttonLink}
          variant="outlined"
          sx={{ mt: 2 }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default ColumnSection;
