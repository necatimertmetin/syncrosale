import React from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Link as MuiLink,
  Divider,
  useTheme,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { InstagramButton } from "./components/social/Instagram";
import { Routes } from "../../../router/Routes";
import { useTranslation } from "../../../providers/useTranslation";

type AppRoute = {
  path: string;
  label: string;
  visibleOnFooter: boolean;
};

export const Footer: React.FC = () => {
  const theme = useTheme();
  const { translateWithoutPrefix } = useTranslation();

  const footerLinks: AppRoute[] = Routes.filter(
    (r: AppRoute) => r.visibleOnFooter
  );

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.palette.background.default,
        borderTop: "2px solid",
        borderTopColor: theme.palette.primary.main,
        mt: 6,
      }}
      py={4}
    >
      <Stack
        spacing={3}
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%" }}
      >
        {/* SOCIAL ICONS */}
        <Stack direction="row" spacing={2}>
          <IconButton
            color="primary"
            href="https://instagram.com"
            target="_blank"
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Stack>

        {/* NAV LINKS */}
        <Stack direction="row" spacing={3}>
          {footerLinks.map((route) => (
            <MuiLink
              key={route.path}
              href={route.path}
              underline="none"
              color="text.secondary"
              sx={{
                fontSize: "0.9rem",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {translateWithoutPrefix(route.label)}
            </MuiLink>
          ))}
        </Stack>

        <Divider sx={{ width: "80%", opacity: 0.2 }} />

        {/* COPYRIGHT */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "0.75rem" }}
        >
          {translateWithoutPrefix("footer.allRightsReserved", {
            year: new Date().getFullYear(),
          })}
        </Typography>

        <InstagramButton />
      </Stack>
    </Box>
  );
};
