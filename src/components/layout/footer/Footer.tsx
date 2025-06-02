import { Box, IconButton, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { InstagramButton } from "./components/social/Instagram";

export const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: (theme) => theme.palette.background.default,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack spacing={1} alignItems="center" justifyContent="center">
        <Stack direction="row" spacing={2}>
          <IconButton
            color="primary"
            href="https://instagram.com"
            target="_blank"
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Stack>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "0.75rem" }}
        >
          © {new Date().getFullYear()} Syncrosale. All rights reserved.
        </Typography>
        <InstagramButton />
      </Stack>
    </Box>
  );
};
