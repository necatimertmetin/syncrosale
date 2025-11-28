import {
  Box,
  Container,
  Stack,
  Typography,
  useTheme,
  Card,
} from "@mui/material";
import { motion } from "framer-motion";
import { EnterAnimation2 } from "../../components/animated-components/div/EnterAnimation2";

export const CookiePolicy = () => {
  const theme = useTheme();
  const MotionCard = motion(Card);
  const gridColor = theme.palette.highlightedRow.main + "44";

  return (
    <Box
      sx={{
        backgroundSize: "40px 40px",
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, ${gridColor} 25%, ${gridColor} 26%, transparent 27%, transparent 74%, ${gridColor} 75%, ${gridColor} 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, ${gridColor} 25%, ${gridColor} 26%, transparent 27%, transparent 74%, ${gridColor} 75%, ${gridColor} 76%, transparent 77%, transparent)
        `,
        backgroundAttachment: "fixed",
        py: { xs: 8 },
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={2} mb={6} textAlign="center">
          <EnterAnimation2>
            <Typography variant="h3" fontWeight={700}>
              Cookie Policy
            </Typography>
          </EnterAnimation2>
          <Typography variant="h6" fontWeight={300} sx={{ opacity: 0.8 }}>
            Learn how SESA SHIPPING & Syncrosale use cookies.
          </Typography>
        </Stack>

        <MotionCard
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          sx={{
            borderRadius: 4,
            backdropFilter: "blur(10px)",
            background:
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.03)"
                : "rgba(0,0,0,0.04)",
            boxShadow: "0 0 25px rgba(0,0,0,0.08)",
            border: "1px solid rgba(255,255,255,0.1)",
            p: 4,
            mt: 6,
          }}
        >
          <Typography variant="subtitle2" sx={{ mb: 4, textAlign: "center" }}>
            Last Updated: 25 November 2025
          </Typography>

          {[
            {
              title: "1. Introduction",
              text: `This Cookie Policy explains how SESA SHIPPING uses cookies on Syncrosale and related websites.`,
            },
            {
              title: "2. What Are Cookies?",
              text: `Small text files stored on your device to enable functionality or analytics.`,
            },
            {
              title: "3. Cookies We Use",
              text: `We use essential, functional, analytics, and (where legally allowed) marketing cookies.`,
            },
            {
              title: "4. Third-Party Services",
              text: `Third-party providers like analytics or CDN services may place cookies.`,
            },
            {
              title: "5. Managing Cookies",
              text: `You can block or delete cookies from your browser settings.`,
            },
            {
              title: "6. Updates",
              text: `We may update this Policy; continued use constitutes acceptance.`,
            },
            {
              title: "7. Contact Information",
              text: `For questions: info@sesashipping.com`,
            },
          ].map((item, i) => (
            <Box key={i} mb={3}>
              <Typography variant="h6" fontWeight={700}>
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ opacity: 0.9, lineHeight: 1.8 }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </MotionCard>
      </Container>
    </Box>
  );
};
