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

type ContactMode = "contact" | "support";

type ContactProps = {
  mode?: ContactMode;
};

export const Contact = ({ mode = "support" }: ContactProps) => {
  const theme = useTheme();

  const linkStyle = {
    textDecoration: "underline",
    fontWeight: 500,
    transition: "all 0.2s ease",
    color: theme.palette.mode === "dark" ? theme.palette.grey[300] : "inherit",
    "&:hover": {
      color:
        theme.palette.mode === "dark"
          ? theme.palette.primary.light
          : theme.palette.primary.main,
    },
  };

  const MotionBox = motion(Box);
  const MotionStack = motion(Stack);

  const { translate } = useTranslation(
    mode === "support" ? "pages.support" : "pages.contact",
  );

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

  const email =
    mode === "support" ? "support@syncrosale.com" : "info@sesashipping.com";

  const phone = "+18624625050";

  const handleSubmit = () => {
    const subject = encodeURIComponent(
      form.subject || (mode === "support" ? "Support Request" : "Contact Form"),
    );

    const body = encodeURIComponent(
      `Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`,
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      spacing={10}
      sx={{ py: { xs: 8 } }}
    >
      {/* SOL */}
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
                <Typography
                  component="a"
                  href={`mailto:${email}`}
                  sx={linkStyle}
                >
                  {email}
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <Phone color="primary" />
                <Typography component="a" href={`tel:${phone}`} sx={linkStyle}>
                  +1 862 462 5050
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <LocationOn color="primary" />
                <Typography>Edgewater, NJ 07020</Typography>
              </Stack>

              {mode === "support" && (
                <Typography variant="body2" sx={{ opacity: 0.7 }}>
                  {translate("languages")}
                </Typography>
              )}

              <Typography variant="caption" sx={{ opacity: 0.6 }}>
                SyncroSale is a software platform operated by SESA Shipping LLC.
              </Typography>
            </Stack>
          </MotionStack>
        </EnterAnimation2>
      </Grid>

      {/* SAG */}
      <Grid
        size={{ xs: 12, md: 7 }}
        display="flex"
        justifyContent={{ xs: "center", md: "flex-start" }}
        sx={{ px: { xs: 2, md: 4 } }}
      >
        <MotionBox
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
