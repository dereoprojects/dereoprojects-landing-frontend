declare module "vanta/dist/vanta.clouds.min" {
  interface VantaCloudsConfig {
    el: HTMLElement;
    THREE: typeof import("three");
    skyColor?: string;
    cloudColor?: string;
    backgroundColor?: string;
    sunColor?: string;
    cloudShadowColor?: string;
    sunGlareColor?: string;
    sunlightColor?: string;
    speed?: number;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
  }

  interface VantaCloudsEffect {
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

  const VANTA: (config: VantaCloudsConfig) => VantaCloudsEffect;
  export default VANTA;
}