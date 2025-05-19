import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@mui/material/styles";

interface AppbarNavigationProps {
  text?: string;
  value?: string;
  backgroundColor?: string;
  defaultColor?: string;
  selectedColor?: string;
}

const AppbarNavigation: React.FC<AppbarNavigationProps> = ({
  text = "",
  value = "",
  backgroundColor = "transparent",
  defaultColor = "primary.main",
}) => {
  const pathname = usePathname();
  const isSelected = pathname === value;
  const theme = useTheme();

  return (
    <Box
      component={motion.div}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        component={Link}
        sx={{
          color: defaultColor,
          height: "100%",
          backgroundColor,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        href={value}
      >
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography
            variant="h4"
            sx={{
              pb: "2px",
            }}
          >
            {text}
          </Typography>
          <motion.div
            layout
            initial={false}
            animate={{
              width: isSelected ? "100%" : "0%",
              opacity: isSelected ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <Box
              sx={{
                height: 2,
                borderRadius: 1,
                backgroundColor: theme.palette.primary.main,
                width: "100%",
              }}
            />
          </motion.div>
        </Box>
      </Button>
    </Box>
  );
};

export default AppbarNavigation;
