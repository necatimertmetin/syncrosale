import { Avatar, Box, Stack, Typography, useTheme } from "@mui/material";
import { BackgroundLight } from "../../components/animated-components/div/BackgroundLight";
import { Hero } from "./components/Hero";
import { CardSection } from "./components/grid/CardGrid";
import { AnimatedSplitText } from "../../components/animated-components/text/AnimatedSplitText";
export const Landing = () => {
  const theme = useTheme();
  return (
    <Box>
      <BackgroundLight intensity={0.7} />
      <BackgroundLight
        color={theme.palette.secondary.main}
        intensity={0.1}
        bottom={0}
        left={0}
      />
      <Hero />
      <Box
        sx={{
          py: 10,
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "800px",
            mx: "auto",
            py: 10,
            px: 2,
            border: `2px solid ${theme.palette.secondary.main}`,
            borderRadius: 5,
          }}
        >
          <AnimatedSplitText variant="h2" text="Basit. Hızlı. Senkron." />

          <Typography variant="h6" color="text.secondary" mt={2}>
            Tüm satış kanallarınız tek bir akışta buluşsun. Syncrosale ile fark
            yaratmaya hazır olun.
          </Typography>
        </Box>
      </Box>
      <CardSection />

      <Box
        sx={{
          py: 10,
          px: 25,
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <Typography
          variant="h3"
          fontWeight="light"
          sx={{
            py: 10,
            px: 2,
            borderRadius: 5,
          }}
        >
          “ At Syncrosale, we don’t just build products — we create moments of
          synchronicity between vision and execution. Our mission is to empower
          bold thinkers and reshape the way innovation connects with real-world
          impact. ”
        </Typography>

        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Avatar
            alt="Sarper Celebi"
            src="/assets/julian-avatar.jpg" // Görsel yolunu buraya ekle
            sx={{ width: 96, height: 96 }}
          />
          <Box>
            <Typography variant="h5" fontWeight="medium" gutterBottom>
              Sarper Celebi
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Founder & CEO, Syncrosale
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
