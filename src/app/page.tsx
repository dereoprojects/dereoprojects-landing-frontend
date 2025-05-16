"use client";

import { Box } from "@mui/material";
import { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "@mui/material/styles";
import * as THREE from "three";
import { useScroll } from "framer-motion";
import MainSections from "@/components/MainSections/MainSections";

const HeroSection = ({ onVantaReady }: { onVantaReady: () => void }) => {
  const theme = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<any>(null);
  const [isVantaReady, setIsVantaReady] = useState(false);
  const { scrollYProgress } = useScroll();

  // ✅ Color transitions (keep start, adjust end for clarity)

  const skyColorStart = theme.palette.secondary.main; // #F8D8BA
  const skyColorEnd = "#EED9A3"; // soft muted amber

  const cloudColorStart = theme.palette.accent2.main; // #CAB88C
  const cloudColorEnd = "#D4C2A0"; // soft dusty beige

  const cloudShadowColorStart = theme.palette.accent2.main; // #CAB88C
  const cloudShadowColorEnd = "#BBA786"; // light brown contrast

  const sunColorStart = theme.palette.accent.main; // #FFD700
  const sunColorEnd = "#FBE3A2"; // soft buttery gold

  const sunGlareColorStart = "#FFFFFF"; // pure white
  const sunGlareColorEnd = "#FAF3DE"; // off-white warm light

  const sunlightColorStart = "#FFF8DC"; // cornsilk
  const sunlightColorEnd = "#EEDFB7"; // soft yellow-cream

  const cleanupVanta = useCallback(() => {
    if (vantaRef.current) {
      try {
        vantaRef.current.destroy();
      } catch (e) {
        console.warn("Vanta destroy error", e);
      }
      vantaRef.current = null;
    }
  }, []);

  useEffect(() => {
    let mounted = true;

    if (!vantaRef.current && heroRef.current) {
      import("vanta/dist/vanta.clouds.min").then((VANTA) => {
        if (!mounted) return;

        const effect = VANTA.default({
          el: heroRef.current,
          THREE,
          skyColor: skyColorStart,
          cloudColor: cloudColorStart,
          backgroundColor: theme.palette.accent.main,
          sunColor: sunColorStart,
          cloudShadowColor: cloudShadowColorStart,
          sunGlareColor: sunGlareColorStart,
          sunlightColor: sunlightColorStart,
          speed: 1,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
        });

        vantaRef.current = effect;
        setIsVantaReady(true);
        onVantaReady();
      });
    }

    return () => {
      mounted = false;
      cleanupVanta();
    };
  }, [onVantaReady, cleanupVanta, theme]);

  // Animate colors on scroll
  useEffect(() => {
    let currentSky = new THREE.Color(skyColorStart);
    let currentCloud = new THREE.Color(cloudColorStart);
    let currentCloudShadow = new THREE.Color(cloudShadowColorStart);
    let currentSun = new THREE.Color(sunColorStart);
    let currentSunGlare = new THREE.Color(sunGlareColorStart);
    let currentSunlight = new THREE.Color(sunlightColorStart);

    const update = () => {
      const t = Math.max(0, Math.min(1, scrollYProgress.get()));
      // Calculate target colors
      const targetSky = new THREE.Color(skyColorStart).lerp(
        new THREE.Color(skyColorEnd),
        t
      );
      const targetCloud = new THREE.Color(cloudColorStart).lerp(
        new THREE.Color(cloudColorEnd),
        t
      );
      const targetCloudShadow = new THREE.Color(cloudShadowColorStart).lerp(
        new THREE.Color(cloudShadowColorEnd),
        t
      );
      const targetSun = new THREE.Color(sunColorStart).lerp(
        new THREE.Color(sunColorEnd),
        t
      );
      const targetSunGlare = new THREE.Color(sunGlareColorStart).lerp(
        new THREE.Color(sunGlareColorEnd),
        t
      );
      const targetSunlight = new THREE.Color(sunlightColorStart).lerp(
        new THREE.Color(sunlightColorEnd),
        t
      );

      // Smoothly interpolate toward targets
      currentSky.lerp(targetSky, 0.05);
      currentCloud.lerp(targetCloud, 0.05);
      currentCloudShadow.lerp(targetCloudShadow, 0.05);
      currentSun.lerp(targetSun, 0.05);
      currentSunGlare.lerp(targetSunGlare, 0.05);
      currentSunlight.lerp(targetSunlight, 0.05);

      if (vantaRef.current) {
        vantaRef.current.setOptions({
          skyColor: `#${currentSky.getHexString()}`,
          cloudColor: `#${currentCloud.getHexString()}`,
          cloudShadowColor: `#${currentCloudShadow.getHexString()}`,
          sunColor: `#${currentSun.getHexString()}`,
          sunGlareColor: `#${currentSunGlare.getHexString()}`,
          sunlightColor: `#${currentSunlight.getHexString()}`,
        });
      }

      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [scrollYProgress]);

  return (
    <div
      ref={heroRef}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        opacity: 1,
      }}
    />
  );
};

export default function Home() {
  const [isVantaReady, setIsVantaReady] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <Box sx={{ width: "100vw", height: "400vh", overflowX: "hidden" }}>
      <HeroSection onVantaReady={() => setIsVantaReady(true)} />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          opacity: isVantaReady ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <MainSections scrollProgress={scrollYProgress} />
      </Box>
    </Box>
  );
}
