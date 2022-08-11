import { Grid, Paper } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}
export function ResponsiveCard(props: Props): JSX.Element {
  const { xs, sm, md, lg, xl, children } = props;
  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <Paper
        elevation={0}
        sx={{ padding: 1, border: 1, borderRadius: 1, borderColor: (t) => t.palette.divider }}
      >
        {children}
      </Paper>
    </Grid>
  );
}
