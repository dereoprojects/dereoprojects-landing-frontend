import { useTheme } from "@mui/material/styles";
import { useRef, useEffect, useCallback } from "react";
import * as THREE from "three";
import { useScroll } from "framer-motion";

interface VantaEffect {
  destroy: () => void;
  setOptions: (options: {
    skyColor: string;
    cloudColor: string;
    cloudShadowColor: string;
    sunColor: string;
    sunGlareColor: string;
    sunlightColor: string;
  }) => void;
}

const VantaBackground = () => {
  const theme = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<VantaEffect | null>(null);
  const { scrollYProgress } = useScroll();

  const skyColorStart = theme.palette.secondary.main;
  const skyColorEnd = "#EED9A3";
  const cloudColorStart = theme.palette.accent2.main;
  const cloudColorEnd = "#D4C2A0";
  const cloudShadowColorStart = theme.palette.accent2.main;
  const cloudShadowColorEnd = "#BBA786";
  const sunColorStart = theme.palette.accent.main;
  const sunColorEnd = "#FBE3A2";
  const sunGlareColorStart = "#FFFFFF";
  const sunGlareColorEnd = "#FAF3DE";
  const sunlightColorStart = "#FFF8DC";
  const sunlightColorEnd = "#EEDFB7";

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
        if (!mounted || !heroRef.current) return;

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
      });
    }

    return () => {
      mounted = false;
      cleanupVanta();
    };
  }, [cleanupVanta, theme, skyColorStart, cloudColorStart, cloudShadowColorStart, sunColorStart]);

  // Animate colors on scroll
  useEffect(() => {
    const currentSky = new THREE.Color(skyColorStart);
    const currentCloud = new THREE.Color(cloudColorStart);
    const currentCloudShadow = new THREE.Color(cloudShadowColorStart);
    const currentSun = new THREE.Color(sunColorStart);
    const currentSunGlare = new THREE.Color(sunGlareColorStart);
    const currentSunlight = new THREE.Color(sunlightColorStart);

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
  }, [scrollYProgress, skyColorStart, cloudColorStart, cloudShadowColorStart, sunColorStart, skyColorEnd, cloudColorEnd, cloudShadowColorEnd, sunColorEnd, sunGlareColorStart, sunGlareColorEnd, sunlightColorStart, sunlightColorEnd]);

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
      }}
    />
  );
};

export default VantaBackground; 