import React, { Suspense, useState, useEffect } from "react";
import { Box, Grid, Paper, Stack, Typography, useTheme } from "@mui/material";
import { features } from "./components/cardData";
import { motion } from "framer-motion";
import { useTranslation } from "../../../../providers/useTranslation";

export const CardSection = () => {
  const [loadedAnimations, setLoadedAnimations] = useState<{
    [key: string]: React.ComponentType | null;
  }>({});

  const { translate } = useTranslation("pages.landing.features");
  const theme = useTheme();

  useEffect(() => {
    features.forEach(({ key, animationComponent }) => {
      animationComponent().then((Component) => {
        setLoadedAnimations((prev) => ({ ...prev, [key]: Component }));
      });
    });
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      sx={{
        padding: 10,
      }}
    >
      {features.map(({ key }, index) => {
        const Animation = loadedAnimations[key];
        const title = translate(`${key}.title`);
        const description = translate(`${key}.description`);

        return (
          <Grid
            key={key}
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            sx={{ display: "flex" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.5,
              }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ flexGrow: 1, display: "flex" }}
            >
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 3,
                  border: "2px solid transparent",
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexGrow: 1,
                  transition: "0.3s ease",
                  "&:hover": {
                    border: `2px solid ${theme.palette.primary.main}`,
                    transform: "scale(1.03)",
                    boxShadow: 4,
                  },
                }}
              >
                <Box sx={{ flex: 2, mb: 2 }}>
                  {Animation ? (
                    <Suspense fallback={<div>Loading...</div>}>
                      <Animation />
                    </Suspense>
                  ) : (
                    <div>Loading...</div>
                  )}
                </Box>

                <Stack spacing={1} sx={{ flex: 1 }}>
                  <Typography variant="h6" color="primary">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </Stack>
              </Paper>
            </motion.div>
          </Grid>
        );
      })}
    </Grid>
  );
};
