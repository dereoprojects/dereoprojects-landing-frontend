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
          xs: "100%",
          md: "100%",
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: {
            xs: "center",
            md: "flex-start", // default for smaller
          },
          gap: { xs: 1, md: 0 },
          alignItems: {
            xs: "center",
            md: "flex-start",
          },
          textAlign: {
            xs: "center",
            md: "left",
          },
          minHeight: {
            md: "280px", // adjust based on your content size
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1, md: 3 },
          }}
        >
          <Typography variant="h3" sx={{ fontSize: { xs: 22, md: 32 } }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: { xs: 14, md: 18 } }}>
            {description}
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 2,
            flexGrow: {
              xs: 0,
              md: 1,
            },
            display: "flex",
            alignItems: {
              xs: "center",
              md: "flex-start",
            },
            justifyContent: {
              xs: "center",
              md: "flex-start",
            },
            pb: { xs: 0, md: 3 },
          }}
        >
          <Box sx={{ mt: { xs: 1, md: "auto" } }}>
            <Button component={Link} href={buttonLink} variant="outlined">
              {buttonText}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ColumnSection;
