import { Grid, Box, alpha } from '@mui/material';
import { GridIndicator } from './GridIndicator';

interface Props {
  fieldName: string;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  minHeightRem?: number;
}
export function FieldMock(props: Props): JSX.Element {
  const { fieldName, xs, sm, md, lg, xl, minHeightRem } = props;
  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <Box
        sx={{
          pl: 1,
          pt: 0.5,
          pb: 0.5,
          minHeight: 'rem',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: (t) => alpha(t.palette.grey[500], 0.3),
          ...(minHeightRem && { minHeight: `${minHeightRem}rem` }),
        }}
      >
        <GridIndicator tag={fieldName} tagVariant="body1" xs={xs} sm={sm} md={md} lg={lg} xl={xl} />
      </Box>
    </Grid>
  );
}
FieldMock.defaultProps = {
  minHeightRem: undefined,
};
