import {
  Container,
  Stack,
  Typography,
  Box,
  Card,
  useTheme,
  Button,
  Grid,
  Dialog,
  IconButton,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "../../providers/useTranslation";
import {
  counts,
  sections,
  type FeatureSection,
  type SectionKey,
} from "./config";
import { itemSlugs, sectionSlugs } from "./slugs";
import {
  AnalyticsVisual,
  PricingVisual,
  ShippingVisual,
} from "./FeatureVisuals";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

const MotionBox = motion(Box);

/* =========================
   MAIL HANDLER
========================= */
const mailtoHandler = () => {
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
};

const visuals: Partial<Record<SectionKey, React.ReactNode>> = {
  pricing: <PricingVisual />,
  shipping: <ShippingVisual />,
  analytics: <AnalyticsVisual />,
};

/* =========================
   SECTION
========================= */
const titleLinkSx = {
  color: "inherit",
  textDecoration: "none",
  "&:hover": { textDecoration: "underline" },
} as const;

type SectionBlockProps = {
  section: FeatureSection;
  targetId?: string;
  index: number;
  onOpen: (imgs: string[], start: number) => void;
};

const SectionBlock = ({
  section,
  index,
  targetId,
  onOpen,
}: SectionBlockProps) => {
  const theme = useTheme();
  const { translate } = useTranslation("pages.features.sections");
  const { translate: label } = useTranslation("pages.features.labels");
  const { key, icons } = section;
  const itemList = Array.from({ length: counts[key].items }, (_, i) => i);
  const stepList = Array.from({ length: counts[key].steps }, (_, i) => i);
  const slugs = itemSlugs[key];
  const linkTo = (slug?: string) =>
    `/features/${sectionSlugs[key]}${slug ? `/${slug}` : ""}`;
  const highlight = (id: string) =>
    targetId === id
      ? { outline: `2px solid ${theme.palette.primary.main}`, outlineOffset: 2 }
      : {};
  const reverse = index % 2 === 1;
  const images = section.images
    ? theme.palette.mode === "dark"
      ? section.images.dark
      : section.images.light
    : undefined;

  return (
    <Box
      component="section"
      id={key}
      sx={{ scrollMarginTop: 24, mb: { xs: 12, md: 16 } }}
    >
      <MotionBox
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5 }}
      >
        {/* HEADER */}
        <Stack spacing={2} mb={6} maxWidth={760}>
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </Typography>
          <Typography
            variant="h3"
            fontWeight={800}
            component={RouterLink}
            to={linkTo()}
            sx={titleLinkSx}
          >
            {translate(`${key}.title`)}
          </Typography>
          <Typography sx={{ opacity: 0.75, fontSize: 18 }}>
            {translate(`${key}.intro`)}
          </Typography>
        </Stack>

        {/* HOW IT WORKS */}
        <Typography
          variant="overline"
          sx={{ opacity: 0.6, fontWeight: 700, letterSpacing: 2 }}
        >
          {label("how")}
        </Typography>
        <Grid container spacing={2} sx={{ mt: 0.5, mb: 7 }}>
          {stepList.map((i) => (
            <Grid size={{ xs: 12, sm: 6, md: 12 / stepList.length }} key={i}>
              <Box
                id={`${key}-${slugs.steps[i]}`}
                sx={{
                  scrollMarginTop: 24,
                  ...highlight(`${key}-${slugs.steps[i]}`),
                  height: "100%",
                  p: 2.5,
                  borderRadius: 3,
                  borderTop: `3px solid ${theme.palette.secondary.main}`,
                  background: theme.palette.background.paper,
                }}
              >
                <Typography
                  fontWeight={800}
                  sx={{ color: theme.palette.secondary.main, mb: 0.5 }}
                >
                  {i + 1}
                </Typography>
                <Typography
                  fontWeight={700}
                  mb={0.5}
                  component={RouterLink}
                  to={linkTo(slugs.steps[i])}
                  sx={{ ...titleLinkSx, display: "block" }}
                >
                  {translate(`${key}.steps.s${i + 1}.title`)}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ opacity: 0.75, lineHeight: 1.6 }}
                >
                  {translate(`${key}.steps.s${i + 1}.description`)}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="overline"
          sx={{ opacity: 0.6, fontWeight: 700, letterSpacing: 2 }}
        >
          {label("can")}
        </Typography>

        <Grid
          container
          spacing={4}
          direction={reverse ? "row-reverse" : "row"}
          alignItems="flex-start"
          sx={{ mt: 0 }}
        >
          {/* ITEMS */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={2}>
              {itemList.map((i) => {
                const Icon = icons[i % icons.length];
                return (
                <Grid size={{ xs: 12, sm: 6 }} key={i}>
                  <Card
                    id={`${key}-${slugs.items[i]}`}
                    sx={{
                      scrollMarginTop: 24,
                      ...highlight(`${key}-${slugs.items[i]}`),
                      p: 2.5,
                      height: "100%",
                      borderRadius: 3,
                      background: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.divider}`,
                      boxShadow: "none",
                      transition: "0.3s",
                      "&:hover": {
                        borderColor: theme.palette.primary.main,
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Stack spacing={1.2}>
                      <Icon sx={{ color: theme.palette.primary.main }} />
                      <Typography
                        fontWeight={700}
                        component={RouterLink}
                        to={linkTo(slugs.items[i])}
                        sx={titleLinkSx}
                      >
                        {translate(`${key}.items.i${i + 1}.title`)}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ opacity: 0.75, lineHeight: 1.6 }}
                      >
                        {translate(`${key}.items.i${i + 1}.description`)}
                      </Typography>
                    </Stack>
                  </Card>
                </Grid>
                );
              })}
            </Grid>
          </Grid>

          {/* VISUAL */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ position: { md: "sticky" }, top: 24 }}>
            {images ? (
              <Stack spacing={2}>
                {images.map((img, i) => (
                  <Card
                    key={img}
                    onClick={() => onOpen(images, i)}
                    sx={{
                      p: 1.5,
                      borderRadius: 4,
                      cursor: "pointer",
                      background: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.primary.main}`,
                      boxShadow: "0 0 40px rgba(4,200,200,0.2)",
                      transition: "0.3s",
                      "&:hover": { transform: "scale(1.02)" },
                    }}
                  >
                    <Box
                      component="img"
                      src={img}
                      alt={translate(`${key}.title`)}
                      sx={{ width: "100%", borderRadius: 2, display: "block" }}
                    />
                  </Card>
                ))}
              </Stack>
            ) : (
              visuals[key]
            )}
          </Grid>
        </Grid>
      </MotionBox>
    </Box>
  );
};

/* =========================
   MAIN PAGE
========================= */
export const Features = () => {
  const { translate } = useTranslation("pages.features");
  const theme = useTheme();
  const { section, item } = useParams();

  const [open, setOpen] = useState(false);
  const [activeImages, setActiveImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Deep links: /#/features/<section> and /#/features/<section>/<title>
  const sectionKey = sections.find((s) => sectionSlugs[s.key] === section)?.key;
  const targetId = sectionKey
    ? item
      ? `${sectionKey}-${item}`
      : sectionKey
    : undefined;

  useEffect(() => {
    if (!targetId) {
      window.scrollTo({ top: 0 });
      return;
    }
    const timer = window.setTimeout(() => {
      document
        .getElementById(targetId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
    return () => window.clearTimeout(timer);
  }, [targetId]);

  const handleOpen = (imgs: string[], start: number) => {
    setActiveImages(imgs);
    setCurrentIndex(start);
    setOpen(true);
  };

  const handleNext = () =>
    setCurrentIndex((p) => (p === activeImages.length - 1 ? 0 : p + 1));
  const handlePrev = () =>
    setCurrentIndex((p) => (p === 0 ? activeImages.length - 1 : p - 1));

  return (
    <Container
      maxWidth="xl"
      sx={{ py: { xs: 8, md: 14 }, px: { xs: 2, md: 6, xl: 10 } }}
    >
      {/* HERO */}
      <Stack spacing={3} textAlign="center" alignItems="center" mb={8}>
        <Chip
          icon={<VerifiedUserOutlinedIcon />}
          label={translate("hero.badge")}
          color="secondary"
          variant="outlined"
        />
        <Typography variant="h2" fontWeight={800}>
          {translate("hero.title")}
        </Typography>
        <Typography sx={{ opacity: 0.7, maxWidth: 760, fontSize: 18 }}>
          {translate("hero.subtitle")}
        </Typography>
        <Button variant="contained" size="large" onClick={mailtoHandler}>
          {translate("hero.cta")}
        </Button>
      </Stack>

      {/* SECTION NAV */}
      <Stack
        direction="row"
        spacing={1.5}
        justifyContent="center"
        flexWrap="wrap"
        useFlexGap
        mb={14}
      >
        {sections.map((s) => (
          <Chip
            key={s.key}
            component={RouterLink}
            to={`/features/${sectionSlugs[s.key]}`}
            clickable
            label={translate(`sections.${s.key}.nav`)}
            variant="outlined"
            color="primary"
            sx={{ fontWeight: 600, px: 1 }}
          />
        ))}
      </Stack>

      {/* SECTIONS */}
      {sections.map((s, i) => (
        <SectionBlock
          key={s.key}
          section={s}
          index={i}
          targetId={targetId}
          onOpen={handleOpen}
        />
      ))}

      {/* DATA ACCESS */}
      <Box
        sx={{
          p: { xs: 3, md: 5 },
          mb: 10,
          borderRadius: 5,
          border: `2px solid ${theme.palette.secondary.main}`,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight={700} mb={2}>
          {translate("data.title")}
        </Typography>
        <Typography sx={{ opacity: 0.75, maxWidth: 800, mx: "auto", mb: 3 }}>
          {translate("data.description")}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button component={RouterLink} to="/privacy" variant="outlined">
            {translate("data.privacy")}
          </Button>
          <Button component={RouterLink} to="/dpa" variant="outlined">
            {translate("data.dpa")}
          </Button>
        </Stack>
      </Box>

      {/* MODAL VIEWER */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        fullWidth
      >
        <Box
          sx={{
            p: 3,
            background: theme.palette.background.paper,
            position: "relative",
          }}
        >
          <IconButton
            onClick={() => setOpen(false)}
            sx={{ position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>

          {activeImages.length > 0 && (
            <Box
              component="img"
              src={activeImages[currentIndex]}
              sx={{
                width: "100%",
                maxHeight: "75vh",
                objectFit: "contain",
                borderRadius: 2,
              }}
            />
          )}

          {activeImages.length > 1 && (
            <>
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                onClick={handleNext}
                sx={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            </>
          )}
        </Box>
      </Dialog>

      {/* CTA */}
      <Box textAlign="center" mt={10}>
        <Typography variant="h4" fontWeight={700} mb={2}>
          {translate("cta.title")}
        </Typography>
        <Typography sx={{ opacity: 0.7, mb: 3 }}>
          {translate("cta.subtitle")}
        </Typography>
        <Button variant="contained" size="large" onClick={mailtoHandler}>
          {translate("cta.button")}
        </Button>
      </Box>
    </Container>
  );
};
