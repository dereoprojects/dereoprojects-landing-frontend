import { Box, SvgIcon, Typography } from "@mui/material";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React from "react";

const AboutSection = ({
  title,
  text,
  icon,
  animation,
  reversed = false,
}: {
  title: string;
  text: string;
  icon?: React.ReactNode;
  animation: any;
  reversed?: boolean;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  const { scrollYProgress: enterScrollProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
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

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "center",
        gap: 3,
        alignItems: "center",
        minHeight: "70vh",
        width: "100%", //When i make this 500 px for example, issue is gone
        position: "relative",
        overflow: "hidden", // Prevent content overflow
        backgroundColor: reversed ? "primary.main" : "secondary.main",
      }}
    >
      {/* Left Side: Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          px: 3,
          height: { xs: "60%", sm: "100%" },
        }}
      >
        <motion.div
          style={{
            scale: scaleLeave,
            opacity: opacityLeave,
            x: xLeave,
            y: yLeave,
          }}
        >
          <motion.div
            style={{
              scale: scaleEnter,
              opacity: opacityEnter,
              x: xEnter,
              y: yEnter,
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
                  sx={{ color: reversed ? "secondary.main" : "primary.main" }}
                >
                  {title}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </motion.div>
        <motion.div style={{ opacity: textOpacityLeave, x: xLeave }}>
          <motion.div style={{ opacity: textOpacityEnter, x: xEnter }}>
            <Box sx={{ justifyContent: { xs: "center", sm: "normal" } }}>
              <Typography
                sx={{ color: reversed ? "text.secondary" : "text.primary", textAlign: {xs: "center", sm: "start"} }}
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
          px: 3,
          height: { xs: "40%", sm: "100%" },
          width: { xs: "100%", sm: "50%" },
        }}
      >
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            x: animationXEnter,
            opacity: opacityEnter,
            height: "100%",
          }}
        >
          <motion.div
            style={{
              x: animationXLeave,
              opacity: opacityLeave,
              height: "100%",
            }}
          >
            <SvgIcon
              component={animation}
              inheritViewBox
              sx={{
                color: reversed ? "secondary.main" : "primary.main",
                height: "100%",
                width: "100%",
              }}
            />
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AboutSection;
