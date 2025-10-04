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
  const MotionBox = motion(Box);
  const MotionStack = motion(Stack);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      spacing={10}
      sx={{
        py: { xs: 8 },
      }}
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
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            backdropFilter: "blur(10px)",
            background:
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.03)"
                : "rgba(0,0,0,0.04)",
            boxShadow: "0 0 25px rgba(0,0,0,0.08)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Typography variant="h4" fontWeight="600" mb={3}>
            Contact Us
          </Typography>

          <Stack spacing={3} mb={3}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                style: { color: theme.palette.text.secondary },
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                style: { color: theme.palette.text.secondary },
              }}
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              InputLabelProps={{
                style: { color: theme.palette.text.secondary },
              }}
            />
          </Stack>

          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
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
