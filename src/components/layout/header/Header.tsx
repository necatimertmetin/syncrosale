import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import { ThemeToggle } from "./components/ThemeToggle";
import LanguageSwitch from "./components/LanguageSwitch";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import syncrosale from "../../../assets/Syncrosale.png";
export const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0)", // Saydam arka plan
        backdropFilter: "blur(50px)", // Blur efekti
        WebkitBackdropFilter: "blur(10px)", // Safari desteği için
        boxShadow: "none", // İstersen gölgeyi kaldır
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
        </Stack>

        <Box
          sx={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <Divider orientation="vertical" />
          <ThemeToggle />
          <LanguageSwitch />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
