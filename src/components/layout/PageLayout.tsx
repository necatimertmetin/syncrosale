import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { Box, useTheme } from "@mui/material";
import { Footer } from "./footer/Footer";

export const PageLayout = () => {
  const theme = useTheme();
  const gridColor = theme.palette.highlightedRow.main + "44";
  return (
    <Box>
      <Header />
      <Box
        sx={{
          backgroundSize: "40px 40px",
          backgroundImage: `
          linear-gradient(0deg, transparent 24%, ${gridColor} 25%, ${gridColor} 26%, transparent 27%, transparent 74%, ${gridColor} 75%, ${gridColor} 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, ${gridColor} 25%, ${gridColor} 26%, transparent 27%, transparent 74%, ${gridColor} 75%, ${gridColor} 76%, transparent 77%, transparent)
        `,
          backgroundAttachment: "fixed",
          color: theme.palette.text.primary,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
