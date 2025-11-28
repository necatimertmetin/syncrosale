import {
  Box,
  Container,
  Stack,
  Typography,
  useTheme,
  Card,
} from "@mui/material";
import { motion } from "framer-motion";
import { EnterAnimation2 } from "../../components/animated-components/div/EnterAnimation2";

export const DataProcessingAddendum = () => {
  const theme = useTheme();
  const MotionCard = motion(Card);
  const gridColor = theme.palette.highlightedRow.main + "44";

  return (
    <Box
      sx={{
        backgroundSize: "40px 40px",
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, ${gridColor} 25%, ${gridColor} 26%, transparent 27%, transparent 74%, ${gridColor} 75%, ${gridColor} 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, ${gridColor} 25%, ${gridColor} 26%, transparent 27%, transparent 74%, ${gridColor} 75%, ${gridColor} 76%, transparent 77%, transparent)
        `,
        backgroundAttachment: "fixed",
        py: { xs: 8 },
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={2} mb={6} textAlign="center">
          <EnterAnimation2>
            <Typography variant="h3" fontWeight={700}>
              Data Processing Addendum
            </Typography>
          </EnterAnimation2>
          <Typography variant="h6" fontWeight={300} sx={{ opacity: 0.8 }}>
            This Addendum explains how SESA SHIPPING processes personal data.
          </Typography>
        </Stack>

        <MotionCard
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          sx={{
            borderRadius: 4,
            backdropFilter: "blur(10px)",
            background:
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.03)"
                : "rgba(0,0,0,0.04)",
            boxShadow: "0 0 25px rgba(0,0,0,0.08)",
            border: "1px solid rgba(255,255,255,0.1)",
            p: 4,
            mt: 6,
          }}
        >
          <Typography variant="subtitle2" sx={{ mb: 4, textAlign: "center" }}>
            Last Updated: 25 November 2025
          </Typography>

          {[
            {
              title: "1. Roles of the Parties",
              text: `Customer is the Data Controller; SESA SHIPPING is the Data Processor.`,
            },
            {
              title: "2. Scope of Processing",
              text: `Processing solely for Syncrosale functionality and order automation.`,
            },
            {
              title: "3. Duration",
              text: `Processing continues while services are active.`,
            },
            {
              title: "4. Data Processing Instructions",
              text: `SESA processes data only per customer instructions.`,
            },
            {
              title: "5. Confidentiality",
              text: `All personnel are bound by confidentiality requirements.`,
            },
            {
              title: "6. Security Measures",
              text: `Encryption, MFA, monitoring, audits, and access controls are implemented.`,
            },
            {
              title: "7. Sub-Processors",
              text: `Sub-processors may be used with equivalent protections.`,
            },
            {
              title: "8. Data Subject Requests",
              text: `SESA assists the Controller with GDPR/CCPA requests.`,
            },
            {
              title: "9. International Transfers",
              text: `Standard Contractual Clauses or similar safeguards apply.`,
            },
            {
              title: "10. Data Breach Notification",
              text: `Controller is notified without undue delay.`,
            },
            {
              title: "11. Return or Deletion",
              text: `Data deleted within 30 days after termination.`,
            },
            {
              title: "12. Audits",
              text: `Documentation and compliance evidence may be requested.`,
            },
            {
              title: "13. Governing Law",
              text: `New Jersey law applies.`,
            },
          ].map((item, i) => (
            <Box key={i} mb={3}>
              <Typography variant="h6" fontWeight={700}>
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ opacity: 0.9, lineHeight: 1.8 }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}

          <Typography variant="h6" fontWeight={700} mt={4}>
            Contact Information
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            SESA SHIPPING LLC 725 River Road Suite 32 Unit 311 Edgewater, NJ
            07020 – USA Email: privacy@sesashipping.com Phone: +1 862 462 5050
          </Typography>
        </MotionCard>
      </Container>
    </Box>
  );
};
