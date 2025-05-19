declare module "vanta" {
  interface VantaConfig {
    el: HTMLElement;
    THREE: typeof import("three");
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
  }

  interface VantaEffect {
    destroy: () => void;
  }

  const VANTA: {
    [key: string]: (config: VantaConfig) => VantaEffect;
  };

  export default VANTA;
}