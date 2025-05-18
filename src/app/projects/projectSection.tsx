import { Box, Typography, useTheme, alpha } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const ProjectSection = ({
  title,
  text,
  icon,
  component,
  last = false,
  reversed = false,
}: {
  title: string;
  text: string;
  icon?: React.ReactNode;
  last?: boolean;
  component?: React.ReactNode;
  reversed?: boolean;
}) => {
  const ref = React.useRef(null);
  const { scrollYProgress: enterScrollProgress } = useScroll({
    target: ref,
    offset: ["start end", last ? "0.7 end" :  "end end"],
  });

  const { scrollYProgress: exitScrollProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const xEnter = useTransform(enterScrollProgress, [0, 1], ["-75px", "0px"]); // Move horizontally
  const yEnter = useTransform(enterScrollProgress, [0, 1], ["-75px", "0px"]); // Move horizontally
  const scaleEnter = useTransform(enterScrollProgress, [0, 1], [1.4, 1]);
  const opacityEnter = useTransform(enterScrollProgress, [0.2, 1], [0, 1]);
  const textOpacityEnter = useTransform(enterScrollProgress, [0.5, 1], [0, 1]);

  const xLeave = useTransform(exitScrollProgress, [0.2, 1], ["0px", "-75px"]); // Move horizontally
  const yLeave = useTransform(exitScrollProgress, [0.2, 1], ["0px", "-75px"]); // Move horizontally
  const scaleLeave = useTransform(exitScrollProgress, [0.2, 1], [1, 1.4]);
  const opacityLeave = useTransform(exitScrollProgress, [0.2, 0.6], [1, 0]);
  const textOpacityLeave = useTransform(exitScrollProgress, [0.2, 0.7], [1, 0]);

  const animationXEnter = useTransform(
    enterScrollProgress,
    [0, 1],
    ["75px", "0px"]
  );
  const animationXLeave = useTransform(
    exitScrollProgress,
    [0.2, 1],
    ["0px", "75px"]
  );

  const theme = useTheme();

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "center",
        gap: {xs: 1, sm: 3},
        py: {xs: 3, md: 0.5},
        alignItems: "center",
        minHeight: "70vh",
        width: "100%",
        position: "relative",
        overflow: "visible",
        backgroundColor: reversed 
          ? alpha(theme.palette.accent2.main, 0.7)
          : alpha(theme.palette.secondary.main, 0.7),
      }}
    >
      {/* Left Side: Content */}
      <Box
        sx={{
          display: "flex",
          flex: { xs: 6, sm: 5 },
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 3, sm: 5 },
        }}
      >
        <Box
          component={motion.div}
          style={{
            scale: scaleLeave,
            opacity: opacityLeave,
            x: xLeave,
            y: yLeave,
          }}
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "normal" },
          }}
        >
          <Box
            component={motion.div}
            style={{
              scale: scaleEnter,
              opacity: opacityEnter,
              x: xEnter,
              y: yEnter,
            }}
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "normal" },
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              sx={{ justifyContent: { xs: "center", sm: "normal" } }}
              gap={2}
              mb={2}
            >
              <Box
                display={"flex"}
                flexDirection={"row"}
                gap={1}
                alignItems={"center"}
              >
                {icon}
                <Typography
                  component="div"
                  variant="h3"
                  sx={{ color: "primary.main", fontSize: {xs: "7vw", sm: "2rem"}  }}
                >
                  {title}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <motion.div style={{ opacity: textOpacityLeave, x: xLeave }}>
          <motion.div style={{ opacity: textOpacityEnter, x: xEnter }}>
            <Box sx={{ justifyContent: { xs: "center", sm: "normal" } }}>
              <Typography
                sx={{
                  color: "text.primary",
                  textAlign: { xs: "center", sm: "start" },
                }}
              >
                {text}
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flex: { xs: 4, sm: 5 },
        }}
      >
        <Box
          component={motion.div}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            x: animationXEnter,
            opacity: opacityEnter,
          }}
          
        >
          <Box
            component={motion.div}
            style={{
              x: animationXLeave,
              opacity: opacityLeave,
            }}
          >
            {component}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectSection;
