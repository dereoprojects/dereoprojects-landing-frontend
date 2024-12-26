import React, {
  ReactNode,
  ElementType,
  useEffect,
  useRef,
  useState,
} from "react";
import Rive, {
  useRive,
  Layout,
  Fit,
  Alignment,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { calculateActualDimensions } from "@/utils/helpers";

interface ButtonBrushStrokeWrapperProps {
  children: ReactNode;
  reversed?: boolean;
  triggerPlay?: boolean;
  playDelay?: number;
}

const ButtonBrushStrokeWrapper: React.FC<ButtonBrushStrokeWrapperProps> = ({
  children,
  reversed = false,
  triggerPlay = false,
  playDelay = 0, // Default no delay
}) => {
  const { rive, RiveComponent } = useRive({
    src: "/assets/brushes/brush_2.riv",
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
    stateMachines: "State Machine 1",
    artboard: reversed ? "brush_2 reversed" : "brush_2",
    autoplay: false,
  });

  const input = useStateMachineInput(
    rive,
    "State Machine 1",
    "isReversed",
    reversed
  );

  React.useEffect(() => {
    if (input && triggerPlay) {
      const timeoutId = setTimeout(() => {
        input.value = reversed;
        rive?.play();
      }, playDelay);

      return () => clearTimeout(timeoutId); // Cleanup timeout
    }
  }, [input, triggerPlay, playDelay]);

  const containerRef = useRef<HTMLDivElement>(null);
  const [artworkSize, setArtworkSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const container = containerRef.current;

    if (container && rive) {
      const resizeObserver = new ResizeObserver(() => {
        const parentWidth = container.offsetWidth;
        const parentHeight = container.offsetHeight;

        if (rive.artboardWidth && rive.artboardHeight) {
          const { width, height } = calculateActualDimensions(
            parentWidth,
            parentHeight,
            rive.artboardWidth,
            rive.artboardHeight
          );

          setArtworkSize({ width, height });
        }
      });

      // Start observing the container
      resizeObserver.observe(container);

      // Cleanup observer on unmount
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [rive]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%", // Adjust height based on content
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <RiveComponent />
      </div>

      {/* Child Component */}
      <div
        style={{
          position: "absolute",
          zIndex: 2,
          textAlign: "center",
          width: `${artworkSize.width}px`,
          height: `${artworkSize.height}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ButtonBrushStrokeWrapper;
