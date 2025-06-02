import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { Box } from "@mui/material";
import { Footer } from "./footer/Footer";

export const PageLayout = () => {
  return (
    <Box>
      <Header />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
