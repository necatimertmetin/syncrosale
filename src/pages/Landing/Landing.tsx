import { Avatar, Box, Stack, Typography, useTheme } from "@mui/material";
import { BackgroundLight } from "../../components/animated-components/div/BackgroundLight";
import { Hero } from "./components/Hero";
import { CardSection } from "./components/grid/CardGrid";
import { AnimatedSplitText } from "../../components/animated-components/text/AnimatedSplitText";
import { useTranslation } from "../../providers/useTranslation";

export const Landing = () => {
  const theme = useTheme();
  const { translate } = useTranslation("pages.landing");

  return (
    <Box sx={{ overflow: "hidden" }}>
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
          textAlign: "center",
          maxWidth: "800px",
          mx: "auto",
          py: 10,
          px: 2,
          border: `2px solid ${theme.palette.secondary.main}`,
          borderRadius: 5,
        }}
      >
        <AnimatedSplitText variant="h2" text={translate("section.title")} />

        <Typography variant="h6" color="text.secondary" mt={2}>
          {translate("section.subtitle")}
        </Typography>
      </Box>

      <CardSection />

      {/* QUOTE */}
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
          {translate("quote.text")}
        </Typography>

        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Avatar
            alt={translate("quote.author")}
            src="/assets/julian-avatar.jpg"
            sx={{ width: 96, height: 96 }}
          />
          <Box>
            <Typography variant="h5" fontWeight="medium" gutterBottom>
              {translate("quote.author")}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {translate("quote.role")}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
