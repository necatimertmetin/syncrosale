import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Card,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { EnterAnimation2 } from "../../components/animated-components/div/EnterAnimation2";

// --- Doc data structure ---
const docs = [
  {
    category: "Getting Started",
    items: [
      {
        title: "Creating an Account",
        content: `
To get started with **SellerFlash**, you need to create an account.

1. Go to the [Sign Up](#) page.
2. Enter your business email and choose a secure password.
3. Verify your email address.
4. Once verified, you’ll be redirected to your main dashboard.

You can now connect your store and start tracking your performance.`,
      },
      {
        title: "Connecting Your Store",
        content: `
You can connect multiple marketplaces like Amazon, Trendyol, or Etsy.

1. Go to **Store Settings → Add New Store**
2. Select your platform (e.g., Amazon)
3. Authorize access using your seller credentials.
4. Once connected, data syncing begins automatically.`,
      },
    ],
  },
  {
    category: "Store Settings",
    items: [
      {
        title: "Managing Inventory",
        content: `
Keep your listings and stock levels in sync across platforms.

- Edit product quantities directly from SellerFlash.
- Enable auto-sync to update stock in real-time.
- Use “Bulk Edit” for faster management.`,
      },
      {
        title: "Automating Pricing",
        content: `
SellerFlash lets you automate pricing with smart rules.

1. Open **Store Settings → Pricing Rules**
2. Set minimum and maximum margins
3. Enable “Dynamic Adjust” to stay competitive automatically.`,
      },
    ],
  },
  {
    category: "Analytics & Reports",
    items: [
      {
        title: "Sales Dashboard",
        content: `
View your daily, weekly, and monthly sales at a glance.

- Track your top-performing products
- Compare performance between stores
- Export reports in CSV or PDF format`,
      },
      {
        title: "Profit & Margin Tracking",
        content: `
Gain insights into true profitability after fees and shipping.

- View cost breakdowns
- Identify low-margin products
- Optimize pricing for better ROI`,
      },
    ],
  },
  {
    category: "Integrations & Settings",
    items: [
      {
        title: "Connecting Third-Party Tools",
        content: `
You can integrate SellerFlash with Google Sheets, Slack, or custom APIs.

1. Go to **Settings → Integrations**
2. Choose your desired app
3. Follow on-screen connection steps.`,
      },
      {
        title: "Notifications & Alerts",
        content: `
Stay informed with instant alerts.

- Low stock notifications  
- Price mismatch alerts  
- Weekly performance summaries`,
      },
    ],
  },
];

export const Documentation = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(docs[0].items[0]);
  const [query, setQuery] = useState("");

  const filteredDocs = docs.map((section) => ({
    ...section,
    items: section.items.filter((i) =>
      i.title.toLowerCase().includes(query.toLowerCase())
    ),
  }));

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
        py: { xs: 10, md: 14 },
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={2} mb={6} textAlign="center">
          <EnterAnimation2>
            <Typography variant="h3" fontWeight={700}>
              Documentation
            </Typography>
          </EnterAnimation2>
          <Typography variant="h6" fontWeight={300} sx={{ opacity: 0.8 }}>
            Learn how to get the most out of SellerFlash — from setup to
            automation.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {/* Sidebar */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Card
              sx={{
                borderRadius: 4,
                backdropFilter: "blur(10px)",
                background:
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(0,0,0,0.04)",
                p: 2,
                position: "sticky",
                top: 100,
              }}
            >
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Search documentation..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                sx={{ mb: 2 }}
              />

              <List dense>
                {filteredDocs.map((section) => (
                  <Box key={section.category}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        mt: 2,
                        mb: 1,
                        px: 1,
                        textTransform: "uppercase",
                        fontWeight: 700,
                        fontSize: 12,
                        opacity: 0.7,
                      }}
                    >
                      {section.category}
                    </Typography>

                    {section.items.map((item) => (
                      <ListItemButton
                        key={item.title}
                        onClick={() => setSelected(item)}
                        sx={{
                          borderRadius: 2,
                          py: 0.8,
                          px: 1.5,
                          mb: 0.5,
                          backgroundColor:
                            selected.title === item.title
                              ? theme.palette.primary.main + "22"
                              : "transparent",
                          "&:hover": {
                            backgroundColor: theme.palette.primary.main + "22",
                          },
                        }}
                      >
                        <ListItemText
                          primaryTypographyProps={{
                            fontSize: 14,
                            fontWeight:
                              selected.title === item.title ? 600 : 400,
                          }}
                          primary={item.title}
                        />
                      </ListItemButton>
                    ))}
                  </Box>
                ))}
              </List>
            </Card>
          </Grid>

          {/* Content */}
          <Grid size={{ xs: 12, md: 9 }}>
            <MotionCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
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
              }}
            >
              <Typography variant="h4" fontWeight={700} mb={2}>
                {selected.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  whiteSpace: "pre-line",
                  lineHeight: 1.8,
                  opacity: 0.9,
                }}
              >
                {selected.content}
              </Typography>
            </MotionCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
