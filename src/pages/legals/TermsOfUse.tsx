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

export const TermsOfUse = () => {
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
              Terms of Use
            </Typography>
          </EnterAnimation2>
          <Typography variant="h6" fontWeight={300} sx={{ opacity: 0.8 }}>
            Please read the following Terms before using Syncrosale & SESA
            services.
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

          {/* Content */}
          {[
            {
              title: "1. Acceptance of Terms",
              text: `These Terms of Use constitute a legally binding agreement 
              between SESA SHIPPING LLC and any user accessing Syncrosale or related services. 
              By using our services, you confirm that you agree to these Terms and our Privacy Policy.`,
            },
            {
              title: "2. Eligibility",
              text: `You must be at least 18 years old, legally authorized, and allowed under applicable laws to use our platform.`,
            },
            {
              title: "3. Account Registration and Security",
              text: `You must provide accurate information and keep login credentials confidential. 
              SESA is not responsible for unauthorized usage.`,
            },
            {
              title: "4. Scope of Services",
              text: `SESA provides fulfillment, warehousing, FBA prep, and Syncrosale platform access. 
              We do not own your inventory or guarantee marketplace results.`,
            },
            {
              title: "5. Syncrosale Software License",
              text: `Limited, non-transferable license for internal business use only. 
              Reverse engineering, reselling, or circumventing protections is prohibited.`,
            },
            {
              title: "6. Marketplace & Third-Party Integrations",
              text: `You must comply with Amazon policies and maintain valid marketplace accounts. 
              SESA is not responsible for marketplace enforcement actions.`,
            },
            {
              title: "7. User Responsibilities",
              text: `You must not upload unlawful content, misuse services, or store unnecessary sensitive data.`,
            },
            {
              title: "8. Data Processing and Privacy",
              text: `Amazon-related personal data is processed only as a data processor and deleted within 30 days.`,
            },
            {
              title: "9. Service Availability",
              text: `We may update or suspend platform access for maintenance or security.`,
            },
            {
              title: "10. Fees",
              text: `Some services require payment; failure to pay may result in suspension.`,
            },
            {
              title: "11. Termination",
              text: `We may suspend access for violation of Terms or legal requirements.`,
            },
            {
              title: "12. Intellectual Property",
              text: `All Syncrosale software and branding belong to SESA SHIPPING LLC.`,
            },
            {
              title: "13. Disclaimer of Warranties",
              text: `Services are provided “as is” without warranties.`,
            },
            {
              title: "14. Limitation of Liability",
              text: `SESA's total liability is limited to amounts paid in the last 12 months.`,
            },
            {
              title: "15. Indemnification",
              text: `You agree to indemnify SESA for misuse or violations.`,
            },
            {
              title: "16. Governing Law",
              text: `New Jersey law applies. Disputes handled in NJ courts.`,
            },
            {
              title: "17. Changes",
              text: `We may update these Terms. Continued use means acceptance.`,
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
            07020 – USA Email: info@sesashipping.com Phone: +1 862 462 5050
          </Typography>
        </MotionCard>
      </Container>
    </Box>
  );
};
