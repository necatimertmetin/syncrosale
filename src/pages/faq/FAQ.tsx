import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Typography,
  Grid,
  Box,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

const faqData = [
  {
    category: "💳 Billing & Plans",
    items: [
      {
        question: "How can I change my plan?",
        answer:
          "Go to Settings → Billing → Manage Plan. You can upgrade or downgrade your plan anytime. Changes take effect immediately.",
      },
      {
        question: "How do I get a refund?",
        answer:
          "Refunds are handled according to our refund policy. Contact support within 7 days of your payment for eligible refunds.",
      },
    ],
  },
  {
    category: "🏪 Store Setup",
    items: [
      {
        question: "Can I connect multiple stores?",
        answer:
          "Yes, you can connect multiple e-commerce stores under one account. Go to ‘Stores’ → ‘Add New Store’.",
      },
      {
        question: "How do I disconnect a store?",
        answer:
          "Navigate to the ‘Stores’ tab, select the store, and click ‘Disconnect’. Your store data will remain archived for 30 days.",
      },
    ],
  },
  {
    category: "⚙️ Usage",
    items: [
      {
        question: "My dashboard is not updating. What can I do?",
        answer:
          "Try refreshing your connection from the ‘Integrations’ tab. If the issue persists, check your store’s API status.",
      },
      {
        question: "How often does data sync happen?",
        answer:
          "By default, data sync happens every 15 minutes. You can trigger a manual sync anytime from the dashboard.",
      },
    ],
  },
  {
    category: "🔐 Account & Security",
    items: [
      {
        question: "I forgot my password.",
        answer:
          "Use the ‘Forgot Password’ link on the login page. You’ll receive an email to reset your password securely.",
      },
      {
        question: "Can I enable 2FA?",
        answer:
          "Yes, 2-Factor Authentication can be enabled in Settings → Security → Two-Factor Authentication.",
      },
    ],
  },
  {
    category: "💡 Other",
    items: [
      {
        question: "Do you have a mobile app?",
        answer:
          "We’re currently developing a mobile app for iOS and Android. Subscribe to our newsletter for updates!",
      },
      {
        question: "How can I contact support?",
        answer:
          "You can contact our support team at support@Syncrosale.com or via the Contact page.",
      },
    ],
  },
];

export default function FAQPage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8 },
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            gutterBottom
            sx={{ color: theme.palette.text.primary }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ mb: 6, color: theme.palette.text.secondary }}
          >
            Find answers to common questions about Syncrosale.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {faqData.map((section, index) => (
            <Grid size={{ xs: 12 }} key={index}>
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{ mb: 2, mt: 2, color: theme.palette.text.primary }}
              >
                {section.category}
              </Typography>
              {section.items.map((faq, i) => (
                <Accordion
                  key={i}
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    mb: 1,
                    borderRadius: 2,
                    boxShadow: "none",
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="500">{faq.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="text.secondary">{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
