import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { features } from "./components/cardData";

export const CardGrid = () => {
  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      sx={{
        padding: 10,
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      {features.map(({ title, description, animationComponent: Animation }) => (
        <Grid
          key={title}
          size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          sx={{ display: "flex" }}
        >
          <Paper
            elevation={3}
            sx={{
              borderRadius: 3,
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flexGrow: 1,
            }}
          >
            <Box sx={{ flex: 2, mb: 2 }}>
              <Animation />
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
        </Grid>
      ))}
    </Grid>
  );
};
