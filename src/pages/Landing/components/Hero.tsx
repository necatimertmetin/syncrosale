import { Button, Grid, Stack, Typography } from "@mui/material";
import syncrosale from "../../../assets/logo.png";
import { AnimatedTypewriterText } from "../../../components/animated-components/text/AnimatedTypeWriterText";
import { AnimatedSplitText } from "../../../components/animated-components/text/AnimatedSplitText";
import { motion } from "framer-motion";
import { EnterAnimation2 } from "../../../components/animated-components/div/EnterAnimation2";
import { useTranslation } from "../../../providers/useTranslation";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

export const Hero = () => {
  const MotionImg = motion.img;
  const { translate } = useTranslation("pages.landing");

  return (
    <Grid
      container
      sx={{
        height: { xs: "auto", md: "95vh" },
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      spacing={10}
    >
      {/* Sol bölüm */}
      <Grid
        size={{ xs: 12, md: 6 }}
        display="flex"
        justifyContent={{ xs: "center", md: "flex-end" }}
        alignItems="center"
        sx={{ px: { xs: 2, md: 4 } }}
      >
        <Stack spacing={2} maxWidth={{ xs: "100%", md: 490 }}>
          <AnimatedSplitText text="Syncrosale" variant="h2" />
          <AnimatedTypewriterText text={translate("slogan")} variant="h6" />
          <Typography variant="h6" fontWeight={200}></Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ pt: 1 }}
          >
            <Button
              variant="contained"
              sx={{ textTransform: "none" }}
              size="large"
              endIcon={<ChevronRightRoundedIcon />}
            >
              Get Started
            </Button>
            <Button
              sx={{ textTransform: "none" }}
              size="large"
              endIcon={<MenuBookRoundedIcon />}
            >
              Documentation
            </Button>
          </Stack>
        </Stack>
      </Grid>

      {/* Sağ bölüm */}
      <Grid
        size={{ xs: 12, md: 6 }}
        display="flex"
        justifyContent={{ xs: "center", md: "flex-start" }}
        alignItems="center"
        sx={{ px: { xs: 2, md: 4 }, mt: { xs: 4, md: 0 } }}
      >
        <EnterAnimation2>
          <MotionImg
            src={syncrosale}
            initial={{ rotate: 0 }}
            animate={{ rotate: [-15, 15] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              width: "100%",
              maxWidth: 380,
              height: "auto",
              userSelect: "none",
            }}
            alt="Syncrosale Logo"
          />
        </EnterAnimation2>
      </Grid>
    </Grid>
  );
};
