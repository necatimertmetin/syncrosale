import { Box } from "@mui/material";
import { BackgroundLight } from "../../components/animated-components/div/BackgroundLight";
import { Hero } from "./components/Hero";
import { CardGrid } from "./components/grid/CardGrid";
export const Landing = () => {
  return (
    <Box>
      <BackgroundLight intensity={0.3} />
      <Hero />

      <CardGrid />
    </Box>
  );
};
