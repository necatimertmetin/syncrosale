import { Box, Grid, Typography } from "@mui/material";
import type { JSX, RefObject } from "react";

type GridItemProps = {
  icon: JSX.Element;
  label: string;
  refProp: RefObject<HTMLDivElement>;
};

export const GridItem = ({ icon, label, refProp }: GridItemProps) => {
  return (
    <>
      <Grid
        size={{ xs: 6 }}
        ref={refProp}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ zIndex: 2 }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          className="sticky-to-cursor"
          sx={{ height: "90px", width: "90px" }}
        >
          {icon}
          <Typography>{label}</Typography>
        </Box>
      </Grid>
    </>
  );
};
