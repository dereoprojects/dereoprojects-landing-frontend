import { Box, SvgIcon, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const AboutSection = ({
  title,
  text,
  icon,
  img,
  reversed = false,
}: {
  title: string;
  text: string;
  icon?: React.ReactNode;
  img: any;
  reversed?: boolean;
}) => {
  const ref = React.useRef(null);
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
        overflow: "visible", // Prevent content overflow
        backgroundColor: reversed ? "primary.main" : "secondary.main",
      }}
    >
      {/* Left Side: Content */}
      <Box
        sx={{
          display: "flex",
          flex: {xs: 6, sm: 5},
          flexDirection: "column",
          justifyContent: "center",
          px: {xs: 3, sm: 5},
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
                  sx={{ color: reversed ? "secondary.main" : "primary.main" }}
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
                  color: reversed ? "text.secondary" : "text.primary",
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
          flex: {xs: 4, sm: 5},
          overflow: "hidden",
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
          sx={{
            height: { xs: "75%", sm: "50%" },
            width: { xs: "75%", sm: "50%" },
          }}
        >
          <Box
            component={motion.div}
            style={{
              x: animationXLeave,
              opacity: opacityLeave,
              
            }}
          >
            <SvgIcon
              component={img}
              inheritViewBox
              sx={{
                color: reversed ? "secondary.main" : "primary.main",
                height: "100%",
                width: "100%",
                maxHeight: "100%", // Constrain height
                maxWidth: "100%", // Constrain width
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
