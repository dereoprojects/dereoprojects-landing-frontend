import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AppbarNavigationProps {
  text?: string; // Define drawerChange as a function type
  value?: string;
  backgroundColor?: string;
  defaultColor?: string;
  selectedColor?: string;
}

const AppbarNavigation: React.FC<AppbarNavigationProps> = ({
  text = "",
  value = "",
  backgroundColor = "transparent",
  defaultColor = "secondary.main",
  selectedColor = "accent.main",
}) => {
  const pathname = usePathname();
  return (
    <Box
      component={motion.div}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        component={Link}
        sx={{
          color: pathname === value ? selectedColor : defaultColor,
          height: "100%",
          backgroundColor,
          flex: 1, // Ensure equal width
          display: "flex",
          justifyContent: "center", // Center-align text
          alignItems: "center", // Center-align text vertically
        }}
        href={value}
      >
        <Typography variant="h4">{text}</Typography>
      </Button>
    </Box>
  );
};

export default AppbarNavigation;
