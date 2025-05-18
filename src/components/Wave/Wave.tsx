import { Box } from "@mui/material";
import Wave1 from "../../../public/assets/waves/wave_1.svg";
import Wave2 from "../../../public/assets/waves/wave_2.svg";
import Wave3 from "../../../public/assets/waves/wave_3.svg";
import SvgIcon from "@mui/material/SvgIcon";

const waves = [Wave1, Wave2, Wave3];

const Wave: React.FC<{
  selectedWave?: number;
  color?: string;
  backgroundColor?: string;
}> = ({
  selectedWave = 0,
  color,
  backgroundColor,
}) => {
  const WaveComponent = waves[selectedWave % waves.length]; // Ensure deterministic

  return (
    <Box
      sx={{
        '--wave-bg': backgroundColor,
        '--wave-fg': color,
        width: "100%",
        height: "fit-content",
      }}
    >
      <SvgIcon
        component={WaveComponent}
        inheritViewBox
        fontSize="large"
        sx={{
          color,
          width: "100%",
          height: "auto",
          margin: 0,
          padding: 0,
          display: "block",
        }}
      />
    </Box>
  );
};

export default Wave;
