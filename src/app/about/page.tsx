"use client";
import styles from "./styles.module.css";

import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PublicIcon from "@mui/icons-material/Public";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Wave from "@/components/Wave/Wave";

const sectionVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default function AboutPage() {
  return (
    <Container
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      disableGutters
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "100%",
      }}
    >
      {/* Section 1: Who I Am */}
      <Section
        title="Who I Am"
        icon={
          <EmojiPeopleIcon fontSize="large" sx={{ color: "primary.main" }} />
        }
        text="Hi, I’m Oguzhan Dere, a software developer passionate about creating user-friendly applications and exploring the endless possibilities of technology."
        animation={<motion.div className={styles["circle-animation"]} />}
      />
      {/* Section 2: What This Page Is For */}
      <Section
        reversed
        title="What This Page is For"
        icon={<PublicIcon fontSize="large" sx={{ color: "secondary.main" }} />}
        text="This page serves as my digital portfolio and a place where I share my thoughts, hobbies, and aspirations. It's a glimpse into my journey and what inspires me."
        animation={<motion.div className={styles["circle-animation"]} />}
      />

      {/* Section 3: My Ideals */}
      <Section
        title="My Ideals and What I Aim in Life"
        text="I believe in continuous learning, creating a positive impact through technology, and fostering meaningful connections. My goal is to contribute to innovative solutions that make life better."
        animation={<motion.div className={styles["circle-animation"]} />}
      />

      {/* Section 4: Hobbies */}
      <Section
        reversed
        title="Hobbies"
        icon={
          <FavoriteIcon fontSize="large" sx={{ color: "secondary.main" }} />
        }
        text="In my free time, I enjoy creating music, dancing to my favorite tunes, and exploring new creative outlets. These activities fuel my imagination and keep me energized."
        animation={<motion.div className={styles["circle-animation"]} />}
      />
    </Container>
  );
}

const Section = ({
  title,
  text,
  icon,
  animation,
  reversed = false,
}: {
  title: string;
  text: string;
  icon?: React.ReactNode;
  animation: React.ReactNode;
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
  const opacityLeave = useTransform(exitScrollProgress, [0.2, 0.7], [1, 0]);
  const textOpacityLeave = useTransform(exitScrollProgress, [0.2, 0.7], [1, 0]);

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "70vh",
        position: "relative",
        backgroundColor: reversed ? "primary.main" : "secondary.main",
      }}
    >
      {/* Left Side: Content */}
      <Box sx={{ flex: 1, px: 3 }}>
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
            <Box display="flex" alignItems="center" gap={2} mb={2}>
              {icon}
              <Typography
                component="div"
                variant="h5"
                fontWeight="bold"
                sx={{ color: reversed ? "secondary.main" : "primary.main" }}
              >
                {title}
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
        <motion.div style={{ opacity: textOpacityLeave, x: xLeave }}>
          <motion.div style={{ opacity: textOpacityEnter, x: xEnter }}>
            <Typography
              sx={{ color: reversed ? "text.secondary" : "text.primary" }}
            >
              {text}
            </Typography>
          </motion.div>
        </motion.div>
      </Box>

      {/* Right Side: Animation */}
      <motion.div
        style={{
          flex: 1,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        {animation}
      </motion.div>
    </Box>
  );
};
