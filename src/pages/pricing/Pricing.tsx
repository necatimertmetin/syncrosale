import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { EnterAnimation2 } from "../../components/animated-components/div/EnterAnimation2";

const plans = [
  {
    title: "Starter",
    price: "Free",
    description: "Perfect for small projects and testing ideas.",
    features: [
      "Up to 3 users",
      "Basic analytics",
      "Community support",
      "1 GB storage",
    ],
    highlight: false,
  },
  {
    title: "Pro",
    price: "$19/mo",
    description: "Best for growing teams and professional use.",
    features: [
      "Up to 20 users",
      "Advanced analytics",
      "Priority email support",
      "10 GB storage",
    ],
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large-scale needs.",
    features: [
      "Unlimited users",
      "Dedicated account manager",
      "Custom integrations",
      "Premium SLA",
    ],
    highlight: false,
  },
];

export const Pricing = () => {
  const theme = useTheme();
  const gridColor = theme.palette.highlightedRow.main + "44";
  const MotionCard = motion(Card);

  return (
    <Box
      sx={{
        backgroundSize: "40px 40px",
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, ${gridColor} 25%, ${gridColor} 26%, transparent 27%, transparent 74%, ${gridColor} 75%, ${gridColor} 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, ${gridColor} 25%, ${gridColor} 26%, transparent 27%, transparent 74%, ${gridColor} 75%, ${gridColor} 76%, transparent 77%, transparent)
        `,
        backgroundAttachment: "fixed",
        py: { xs: 10, md: 16 },
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} textAlign="center" mb={8}>
          <EnterAnimation2>
            <Typography variant="h3" fontWeight={700}>
              Choose Your Plan
            </Typography>
          </EnterAnimation2>
          <Typography variant="h6" fontWeight={300} sx={{ opacity: 0.8 }}>
            Simple pricing for teams of all sizes. Scale effortlessly as you
            grow.
          </Typography>
        </Stack>

        <Grid container spacing={6} justifyContent="center">
          {plans.map((plan, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={plan.title}>
              <MotionCard
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                sx={{
                  borderRadius: 4,
                  backdropFilter: "blur(10px)",
                  overflow: "hidden",
                  background: plan.highlight
                    ? theme.palette.mode === "dark"
                      ? "linear-gradient(180deg, rgba(4,200,200,0.15) 0%, rgba(4,200,200,0.05) 100%)"
                      : "linear-gradient(180deg, rgba(4,200,200,0.1) 0%, rgba(4,200,200,0.02) 100%)"
                    : theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(0,0,0,0.04)",
                  boxShadow: plan.highlight
                    ? "0 0 30px rgba(4,200,200,0.25)"
                    : "0 0 20px rgba(0,0,0,0.08)",
                  border: plan.highlight
                    ? `2px solid ${theme.palette.primary.main}`
                    : "1px solid rgba(255,255,255,0.1)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 4,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 0 35px rgba(4,200,200,0.4)",
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    fontWeight={600}
                    color={
                      plan.highlight
                        ? theme.palette.primary.main
                        : theme.palette.text.primary
                    }
                    gutterBottom
                  >
                    {plan.title}
                  </Typography>

                  <Typography
                    variant="h3"
                    fontWeight={700}
                    sx={{ mt: 2, mb: 1 }}
                  >
                    {plan.price}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ mb: 3, opacity: 0.8, minHeight: 50 }}
                  >
                    {plan.description}
                  </Typography>

                  <Stack spacing={1.5} sx={{ mb: 3 }}>
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
                </CardContent>

                <Button
                  variant={plan.highlight ? "contained" : "outlined"}
                  size="large"
                  fullWidth
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    py: 1.5,
                    borderRadius: 3,
                    background: plan.highlight
                      ? "linear-gradient(90deg, #04C8C8 0%, #00B2B2 100%)"
                      : undefined,
                    boxShadow: plan.highlight
                      ? "0 4px 20px rgba(4,200,200,0.4)"
                      : undefined,
                    "&:hover": {
                      background: plan.highlight
                        ? "linear-gradient(90deg, #05dada 0%, #03bfbf 100%)"
                        : undefined,
                      boxShadow: plan.highlight
                        ? "0 4px 25px rgba(4,200,200,0.6)"
                        : undefined,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {plan.highlight ? "Get Started" : "Learn More"}
                </Button>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
