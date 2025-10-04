import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { EnterAnimation2 } from "../../components/animated-components/div/EnterAnimation2";

export const Contact = () => {
  const theme = useTheme();
  const gridColor = theme.palette.highlightedRow.main + "44";
  const MotionBox = motion(Box);
  const MotionStack = motion(Stack);

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
        py: { xs: 8, sm: 12, md: 16 },
        height: { xs: "auto", md: "100vh" },
      }}
      alignItems="center"
      justifyContent="center"
      spacing={10}
    >
      {/* Sol taraf - Contact Info */}
      <Grid
        size={{ xs: 12, md: 5 }}
        display="flex"
        justifyContent={{ xs: "center", md: "flex-end" }}
        sx={{ px: { xs: 2, md: 4 } }}
      >
        <EnterAnimation2>
          <MotionStack
            spacing={3}
            sx={{
              maxWidth: 420,
              color: theme.palette.text.primary,
            }}
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography variant="h3" fontWeight="700">
              Let’s Talk
            </Typography>
            <Typography variant="h6" fontWeight={300} sx={{ opacity: 0.8 }}>
              Have a project in mind or just want to say hi? Reach out — we’d
              love to hear from you.
            </Typography>

            <Stack spacing={2} sx={{ pt: 3 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Email color="primary" />
                <Typography variant="body1">contact@syncrosale.com</Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Phone color="primary" />
                <Typography variant="body1">+90 555 555 55 55</Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <LocationOn color="primary" />
                <Typography variant="body1">Istanbul, Turkey</Typography>
              </Stack>
            </Stack>
          </MotionStack>
        </EnterAnimation2>
      </Grid>

      {/* Sağ taraf - Form */}
      <Grid
        size={{ xs: 12, md: 7 }}
        display="flex"
        justifyContent={{ xs: "center", md: "flex-start" }}
        sx={{ px: { xs: 2, md: 4 } }}
      >
        <MotionBox
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          sx={{
            width: "100%",
            maxWidth: 520,
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            backdropFilter: "blur(10px)",
            background:
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.05)"
                : "rgba(0,0,0,0.05)",
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 0 20px rgba(0, 200, 200, 0.1)"
                : "0 0 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h4" fontWeight="600" mb={3}>
            Contact Us
          </Typography>

          <Stack spacing={3}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              InputProps={{
                sx: {
                  color: theme.palette.text.primary,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.2)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              InputProps={{
                sx: {
                  color: theme.palette.text.primary,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.2)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              InputProps={{
                sx: {
                  color: theme.palette.text.primary,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.2)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
            />
          </Stack>

          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 4,
              px: 5,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: 600,
              textTransform: "none",
              alignSelf: "flex-end",
              background: "linear-gradient(90deg, #04C8C8 0%, #00B2B2 100%)",
              boxShadow: "0 4px 20px rgba(4,200,200,0.4)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(90deg, #05dada 0%, #03bfbf 100%)",
                boxShadow: "0 4px 25px rgba(4,200,200,0.6)",
                transform: "translateY(-2px)",
              },
            }}
          >
            Send Message
          </Button>
        </MotionBox>
      </Grid>
    </Grid>
  );
};
