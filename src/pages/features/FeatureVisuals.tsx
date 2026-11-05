import { Box, Chip, Stack, Typography, useTheme } from "@mui/material";
import { useTranslation } from "../../providers/useTranslation";

/** Shared frame used by all illustrative visuals. */
const Frame = ({
  children,
  caption,
}: {
  children: React.ReactNode;
  caption: string;
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 4,
        background: theme.palette.background.paper,
        border: `1px solid ${theme.palette.primary.main}`,
        boxShadow: "0 0 40px rgba(4,200,200,0.2)",
      }}
    >
      {children}
      <Typography
        variant="caption"
        sx={{ display: "block", mt: 2, opacity: 0.55, textAlign: "right" }}
      >
        {caption}
      </Typography>
    </Box>
  );
};

const mono = { fontVariantNumeric: "tabular-nums" } as const;

/* =========================
   PRICING RULES
========================= */
export const PricingVisual = () => {
  const theme = useTheme();
  const { translate } = useTranslation("pages.features");
  const t = (k: string) => translate(`visuals.pricing.${k}`);

  const rows = [
    { range: "$0 – $20", min: 18, std: 25, max: 35 },
    { range: "$20 – $50", min: 14, std: 20, max: 28 },
    { range: "$50 – $150", min: 10, std: 15, max: 22 },
    { range: t("default"), min: 8, std: 12, max: 18, def: true },
  ];

  const cell = { py: 1, px: 1, textAlign: "center" as const, ...mono };

  return (
    <Frame caption={translate("example")}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          alignItems: "center",
        }}
      >
        {[t("cost"), t("min"), t("std"), t("max")].map((h) => (
          <Typography
            key={h}
            variant="caption"
            sx={{ ...cell, fontWeight: 700, opacity: 0.7 }}
          >
            {h}
          </Typography>
        ))}
        {rows.map((r) => (
          <Box key={r.range} sx={{ display: "contents" }}>
            <Typography sx={{ ...cell, fontWeight: 600 }}>{r.range}</Typography>
            {[r.min, r.std, r.max].map((v, i) => (
              <Box key={i} sx={cell}>
                <Chip
                  size="small"
                  label={`${v}%`}
                  variant="outlined"
                  color={i === 1 ? "primary" : "secondary"}
                  sx={{ fontWeight: 600 }}
                />
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      <Stack direction="row" spacing={1} mt={2} flexWrap="wrap" useFlexGap>
        <Chip size="small" color="primary" label={t("mode1")} />
        <Chip size="small" variant="outlined" label={t("mode3")} />
      </Stack>
      <Box
        sx={{
          mt: 2,
          height: 4,
          borderRadius: 2,
          background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
          opacity: 0.6,
        }}
      />
    </Frame>
  );
};

/* =========================
   SHIPPING FLOW
========================= */
export const ShippingVisual = () => {
  const theme = useTheme();
  const { translate } = useTranslation("pages.features");
  const steps = ["s1", "s2", "s3", "s4", "s5"];

  return (
    <Frame caption={translate("example")}>
      <Stack spacing={0}>
        {steps.map((s, i) => {
          const isAmazon = s === "s4";
          return (
            <Stack key={s} direction="row" spacing={2} alignItems="stretch">
              <Stack alignItems="center">
                <Box
                  sx={{
                    width: 14,
                    height: 14,
                    mt: 0.5,
                    borderRadius: "50%",
                    background: isAmazon
                      ? theme.palette.primary.main
                      : theme.palette.secondary.main,
                    boxShadow: isAmazon
                      ? `0 0 12px ${theme.palette.primary.main}`
                      : "none",
                  }}
                />
                {i < steps.length - 1 && (
                  <Box
                    sx={{
                      flex: 1,
                      width: 2,
                      minHeight: 28,
                      background: theme.palette.divider,
                    }}
                  />
                )}
              </Stack>
              <Typography
                sx={{ pb: 1.5, fontWeight: isAmazon ? 700 : 500 }}
              >
                {translate(`visuals.shipping.${s}`)}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Frame>
  );
};

/* =========================
   ORDER PROFIT BREAKDOWN
========================= */
export const AnalyticsVisual = () => {
  const theme = useTheme();
  const { translate } = useTranslation("pages.features");
  const t = (k: string) => translate(`visuals.analytics.${k}`);

  const lines = [
    { label: t("sale"), value: "$100.00" },
    { label: t("fees"), value: "-$15.00" },
    { label: t("cost"), value: "-$58.00" },
    { label: t("shipping"), value: "-$9.00" },
    { label: t("refunds"), value: "$0.00" },
  ];

  return (
    <Frame caption={translate("example")}>
      <Stack spacing={1.2}>
        {lines.map((l) => (
          <Stack
            key={l.label}
            direction="row"
            justifyContent="space-between"
            sx={{
              pb: 1,
              borderBottom: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Typography sx={{ opacity: 0.8 }}>{l.label}</Typography>
            <Typography sx={{ fontWeight: 600, ...mono }}>{l.value}</Typography>
          </Stack>
        ))}
      </Stack>

      <Stack direction="row" spacing={2} mt={2.5}>
        {[
          { label: t("estimated"), value: "$18.00", primary: false },
          { label: t("actual"), value: "$18.00", primary: true },
        ].map((k) => (
          <Box
            key={k.label}
            sx={{
              flex: 1,
              p: 2,
              borderRadius: 3,
              textAlign: "center",
              border: `1px solid ${
                k.primary
                  ? theme.palette.primary.main
                  : theme.palette.secondary.main
              }`,
            }}
          >
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
              {k.label}
            </Typography>
            <Typography variant="h5" fontWeight={700} sx={mono}>
              {k.value}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Frame>
  );
};
