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
} from "@mui/material";
import { useTranslation } from "../../providers/useTranslation";
import { useState } from "react";
import { features, type Feature } from "./config";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";

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

/* =========================
   FEATURE BLOCK
========================= */
type FeatureBlockProps = {
  title: string;
  desc: string;
  images?: string[];
  reverse?: boolean;
  onOpen?: (imgs: string[]) => void;
};

const FeatureBlock = ({
  title,
  desc,
  images,
  reverse,
  onOpen,
}: FeatureBlockProps) => {
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={8}
      alignItems="center"
      direction={reverse ? "row-reverse" : "row"}
      sx={{ mb: 16 }}
    >
      {/* TEXT */}
      <Grid size={{ xs: 12, md: images ? 6 : 12 }}>
        <Stack spacing={3}>
          <Typography variant="h4" fontWeight={700}>
            {title}
          </Typography>

          <Typography sx={{ opacity: 0.7, fontSize: 16 }}>{desc}</Typography>
        </Stack>
      </Grid>

      {/* IMAGE */}
      {images && (
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            onClick={() => onOpen?.(images)}
            sx={{
              p: 2,
              borderRadius: 4,
              cursor: "pointer",
              background: theme.palette.background.paper,
              border: `1px solid ${theme.palette.primary.main}`,
              boxShadow: "0 0 40px rgba(4,200,200,0.2)",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          >
            {images.length > 1 ? (
              <Grid container spacing={1}>
                {images.slice(0, 6).map((img) => (
                  <Grid size={{ xs: 4 }} key={img}>
                    <Box
                      component="img"
                      src={img}
                      sx={{ width: "100%", borderRadius: 1 }}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Box
                component="img"
                src={images[0]}
                sx={{ width: "100%", borderRadius: 2 }}
              />
            )}
          </Card>
        </Grid>
      )}
    </Grid>
  );
};

/* =========================
   MAIN PAGE
========================= */
export const Features = () => {
  const { translate } = useTranslation("pages.features");
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [activeImages, setActiveImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getImages = (feature: Feature): string[] | undefined => {
    if (!feature.images) return undefined;

    return theme.palette.mode === "dark"
      ? feature.images.dark
      : feature.images.light;
  };

  const handleOpen = (imgs: string[]) => {
    setActiveImages(imgs);
    setCurrentIndex(0);
    setOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === activeImages.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? activeImages.length - 1 : prev - 1,
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 14 }}>
      {/* HERO */}
      <Stack spacing={3} textAlign="center" alignItems="center" mb={14}>
        <Typography variant="h2" fontWeight={800}>
          {translate("hero.title")}
        </Typography>

        <Typography sx={{ opacity: 0.7, maxWidth: 700 }}>
          {translate("hero.subtitle")}
        </Typography>

        <Button variant="contained" size="large" onClick={mailtoHandler}>
          {translate("hero.cta")}
        </Button>
      </Stack>

      {/* FEATURES */}
      {features.map((feature, index) => (
        <FeatureBlock
          key={feature.key}
          title={translate(`items.${feature.key}.title`)}
          desc={translate(`items.${feature.key}.description`)}
          images={getImages(feature)}
          reverse={index % 2 === 1}
          onOpen={handleOpen}
        />
      ))}

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
          {/* CLOSE */}
          <IconButton
            onClick={() => setOpen(false)}
            sx={{ position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>

          {/* MAIN IMAGE */}
          {activeImages.length > 0 && (
            <Box
              component="img"
              src={activeImages[currentIndex]}
              sx={{
                width: "100%",
                maxHeight: "70vh",
                objectFit: "contain",
                borderRadius: 2,
              }}
            />
          )}

          {/* NAV BUTTONS */}
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

          {/* THUMBNAILS */}
          {activeImages.length > 1 && (
            <Grid container spacing={1} mt={2}>
              {activeImages.map((img, i) => (
                <Grid size={{ xs: 2 }} key={img}>
                  <Box
                    component="img"
                    src={img}
                    onClick={() => setCurrentIndex(i)}
                    sx={{
                      width: "100%",
                      cursor: "pointer",
                      borderRadius: 1,
                      border:
                        i === currentIndex
                          ? `2px solid ${theme.palette.primary.main}`
                          : "2px solid transparent",
                      opacity: i === currentIndex ? 1 : 0.6,
                    }}
                  />
                </Grid>
              ))}
            </Grid>
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
