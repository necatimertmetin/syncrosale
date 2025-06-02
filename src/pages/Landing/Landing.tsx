import { Box, useTheme } from "@mui/material";
import { BackgroundLight } from "../../components/animated-components/div/BackgroundLight";
import { Hero } from "./components/Hero";
import { CardGrid } from "./components/grid/CardGrid";
export const Landing = () => {
  const theme = useTheme();
  return (
    <Box>
      <BackgroundLight intensity={0.3} />
      <BackgroundLight
        color={theme.palette.secondary.main}
        intensity={0.1}
        bottom={0}
        left={0}
      />
      <Hero />

      <CardGrid />
    </Box>
  );
};
