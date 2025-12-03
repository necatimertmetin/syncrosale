import { AppBar, Toolbar, Box, Typography, Button, Stack } from "@mui/material";
import { ThemeToggle } from "./components/ThemeToggle";
import LanguageSwitch from "./components/LanguageSwitch";
import { Link as RouterLink } from "react-router-dom";
import syncrosale from "../../../assets/logo.png";
import { Routes } from "../../../router/Routes";
import { useTranslation } from "../../../providers/useTranslation";

export const Header = () => {
  const { translateWithoutPrefix } = useTranslation();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0)", // Saydam arka plan
        backdropFilter: "blur(50px)", // Blur efekti
        WebkitBackdropFilter: "blur(10px)", // Safari desteği için
        boxShadow: "none", // Gölgeyi kaldır
      }}
    >
      <Toolbar
        sx={{
          position: "relative",
          minHeight: 64,
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <img src={syncrosale} style={{ height: "48px" }} />
          <Typography variant="h4">Syncrosale</Typography>
        </Stack>

        {/* Menü */}
        <Box
          sx={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          {Routes.filter((route) => route.visibleOnHeader).map((route) => (
            <Button
              key={route.path}
              component={RouterLink}
              to={route.path}
              color="inherit"
              sx={{
                textTransform: "none",
              }}
            >
              <Typography>{translateWithoutPrefix(route.label)}</Typography>
            </Button>
          ))}

          {/* Ayarlar */}
          <ThemeToggle />
          <LanguageSwitch />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
