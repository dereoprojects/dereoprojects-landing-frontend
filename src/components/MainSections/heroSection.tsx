import { Typography } from "@mui/material";
import { motion, MotionValue } from "framer-motion";
import Brand from "@/components/Brand/Brand";
import SectionContainer from "@/components/SectionContainer/SectionContainer";

interface HeroSectionProps {
  scrollProgress: MotionValue<number>;
}

const sectionTiming = {
  hero: {
    fadeInStart: 0,
    fadeInEnd: 0,
    fadeOutStart: 0.2,
    fadeOutEnd: 0.3,
  },
};

const HeroSection = ({ scrollProgress }: HeroSectionProps) => {
  return (
    <SectionContainer 
      id="hero"
      scrollProgress={scrollProgress}
      {...sectionTiming.hero}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Brand shining={false} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{
            maxWidth: "600px",
            color: "text.primary",
            fontWeight: 300,
            lineHeight: 1.6,
          }}
        >
          Crafting digital experiences that blend creativity with technical excellence.
        </Typography>
      </motion.div>
    </SectionContainer>
  );
};

export default HeroSection;
