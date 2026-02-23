import {
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

export const Pricing = () => {
  const theme = useTheme();
  const MotionCard = motion(Card);

  const plan = {
    title: "Free Trial",
    price: "Free",
    description:
      "Get early access to SyncroSale and start automating your Amazon operations.",
    features: [
      "Real-time profit tracking (Actual vs Estimated)",
      "Automated purchasing & checkout",
      "Warehouse & order lifecycle tracking",
      "Amazon integration ready",
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Grid container spacing={6} alignItems="center">
        {/* LEFT SIDE */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3}>
            <Typography variant="h3" fontWeight={700}>
              Automate Your Amazon Operations End-to-End
            </Typography>

            <Typography variant="h6" sx={{ opacity: 0.8 }}>
              SyncroSale handles purchasing, warehouse flow, and profit tracking
              — so you can scale without chaos.
            </Typography>

            <Stack spacing={2}>
              {[
                "Track real profit in real-time",
                "Automate order & purchasing flow",
                "Manage warehouse lifecycle",
                "Scale without operational chaos",
              ].map((item) => (
                <Stack direction="row" spacing={1.5} key={item}>
                  <CheckRoundedIcon
                    sx={{ color: theme.palette.primary.main }}
                  />
                  <Typography>{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid size={{ xs: 12, md: 6 }}>
          <MotionCard
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            sx={{
              borderRadius: 4,
              p: 4,
              backdropFilter: "blur(10px)",
              background:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(0,0,0,0.04)",
              boxShadow: "0 0 30px rgba(4,200,200,0.25)",
              border: `2px solid ${theme.palette.primary.main}`,
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                fontWeight={600}
                color={theme.palette.primary.main}
              >
                {plan.title}
              </Typography>

              <Typography variant="h3" fontWeight={700} sx={{ mt: 2 }}>
                {plan.price}
              </Typography>

              <Typography sx={{ mt: 2, opacity: 0.8 }}>
                {plan.description}
              </Typography>

              <Stack spacing={1.5} sx={{ my: 3 }}>
                {plan.features.map((feature) => (
                  <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                    key={feature}
                  >
                    <CheckRoundedIcon
                      sx={{ color: theme.palette.primary.main }}
                    />
                    <Typography variant="body2">{feature}</Typography>
                  </Stack>
                ))}
              </Stack>

              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={() => {
                  window.location.href = `mailto:contact@syncrosale.com?subject=Early Access Request - SyncroSale&body=${encodeURIComponent(
                    `Hi SyncroSale Team,

I would like to request early access to SyncroSale.

Here are my details:

- Name:
- Company:
- Monthly Order Volume:
- Marketplace (Amazon US / EU / etc):

Looking forward to hearing from you.

Best regards,`,
                  )}`;
                }}
              >
                Request Early Access
              </Button>
            </CardContent>
          </MotionCard>
        </Grid>
      </Grid>

      {/* TRUST SECTION */}
      <Box mt={10} textAlign="center">
        <Typography variant="body2" sx={{ opacity: 0.6 }}>
          Built for modern Amazon sellers who want clarity, automation, and
          scalability.
        </Typography>
      </Box>
    </Container>
  );
};
