import { Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import syncrosale from "../../../assets/Syncrosale.png";
import { AnimatedTypewriterText } from "../../../components/animated-components/text/AnimatedTypeWriterText";
import { AnimatedSplitText } from "../../../components/animated-components/text/AnimatedSplitText";
import { motion } from "framer-motion";
import { EnterAnimation2 } from "../../../components/animated-components/div/EnterAnimation2";
import { useTranslation } from "../../../providers/useTranslation";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
export const Hero = () => {
  const theme = useTheme();
  const gridColor = theme.palette.highlightedRow.main + "44";
  const MotionImg = motion.img;
  const { translate } = useTranslation("pages.landing");
  return (
    <Grid
      container
      sx={{
        backgroundSize: "40px 40px",
        backgroundImage: `
                linear-gradient(0deg, transparent 24%, ${gridColor} 25%, ${gridColor} 26%, transparent 27%, transparent 74%, ${gridColor} 75%, ${gridColor} 76%, transparent 77%, transparent),
                linear-gradient(90deg, transparent 24%, ${gridColor} 25%, ${gridColor} 26%, transparent 27%, transparent 74%, ${gridColor} 75%, ${gridColor} 76%, transparent 77%, transparent)
              `,

        backgroundAttachment: "fixed",
      }}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"90vh"}
      py={16}
    >
      <Grid
        size={{ xs: 4 }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack spacing={2}>
          <AnimatedSplitText text="Syncrosale" variant={"h2"} />
          <AnimatedTypewriterText text={translate("slogan")} />
          <Typography variant="h6" fontWeight={200}></Typography>
          <Stack direction={"row"} spacing={3}>
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
      <Grid
        size={{ xs: 4 }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <EnterAnimation2>
          <MotionImg
            src={syncrosale}
            initial={{ rotate: 0 }}
            animate={{ rotate: [-15, 15] }} // -15 → 15
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse", // ileri geri salınım
              ease: "easeInOut",
            }}
            style={{ height: "380px" }}
          />
        </EnterAnimation2>
      </Grid>
    </Grid>
  );
};
