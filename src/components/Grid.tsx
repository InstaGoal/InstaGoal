"use client";
import { Grid } from "@mui/material";

interface GridProps {
  children: React.ReactNode;
  container?: boolean;
  item?: boolean;
  xs?: number;
  sx?: object;
  spacing?: number;
  sm?: number
}

export default function GridContainer({
  children,
  container,
  item,
  xs,
  sx,
  spacing,
  sm
}: GridProps) {
  return (
    <Grid container={container} item={item} xs={xs} sx={sx} spacing={spacing} maxWidth="sm" sm={sm}>
      {children}
    </Grid>
  );
}
