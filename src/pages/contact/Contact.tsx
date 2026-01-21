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
import { useTranslation } from "../../providers/useTranslation";
import { useState } from "react";

export const Contact = () => {
  const theme = useTheme();
  const MotionBox = motion(Box);
  const MotionStack = motion(Stack);
  const { translate } = useTranslation("pages.contact");

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = () => {
    const mailTo = "info@sesashipping.com";

    const subject = encodeURIComponent(form.subject || "Website Contact Form");

    const body = encodeURIComponent(
      `Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`,
    );

    window.location.href = `mailto:${mailTo}?subject=${subject}&body=${body}`;
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      spacing={10}
      sx={{ py: { xs: 8 } }}
    >
      {/* SOL - CONTACT INFO */}
      <Grid
        size={{ xs: 12, md: 5 }}
        display="flex"
        justifyContent={{ xs: "center", md: "flex-end" }}
        sx={{ px: { xs: 2, md: 4 } }}
      >
        <EnterAnimation2>
          <MotionStack
            spacing={3}
            sx={{ maxWidth: 420, color: theme.palette.text.primary }}
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography variant="h3" fontWeight={700}>
              {translate("title")}
            </Typography>
            <Typography variant="h6" fontWeight={300} sx={{ opacity: 0.8 }}>
              {translate("subtitle")}
            </Typography>

            <Stack spacing={2} sx={{ pt: 3 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Email color="primary" />
                <Typography>info@sesashipping.com</Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Phone color="primary" />
                <Typography>+1 862 462 5050</Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <LocationOn color="primary" />
                <Typography>Edgewater, NJ 07020</Typography>
              </Stack>
            </Stack>
          </MotionStack>
        </EnterAnimation2>
      </Grid>

      {/* SAG - FORM */}
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
          }}
        >
          <Typography variant="h5" fontWeight={600} mb={2}>
            {translate("title")}
          </Typography>

          <Stack spacing={3} mb={3}>
            <TextField
              label={translate("form.name")}
              fullWidth
              value={form.name}
              onChange={handleChange("name")}
            />
            <TextField
              label={translate("form.email")}
              fullWidth
              value={form.email}
              onChange={handleChange("email")}
            />
            <TextField
              label={translate("form.subject")}
              fullWidth
              value={form.subject}
              onChange={handleChange("subject")}
            />
            <TextField
              label={translate("form.message")}
              fullWidth
              multiline
              rows={5}
              value={form.message}
              onChange={handleChange("message")}
            />
          </Stack>

          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={handleSubmit}
          >
            {translate("form.submit")}
          </Button>
        </MotionBox>
      </Grid>
    </Grid>
  );
};
