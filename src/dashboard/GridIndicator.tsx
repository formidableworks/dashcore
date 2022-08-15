import { Box, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';

interface Props {
  tag: string;
  tagVariant: Variant;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}
export function GridIndicator(props: Props): JSX.Element {
  const { tag, tagVariant, xs, sm, md, lg, xl } = props;
  return (
    <Box sx={{}}>
      <Typography variant={tagVariant}>{tag}</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          flexWrap: 'wrap',
          color: (t) => t.palette.grey[500],
        }}
      >
        <Box
          sx={(t) => ({
            fontSize: '0.6rem',
            [t.breakpoints.only('xs')]: {
              fontWeight: 'bold',
            },
          })}
        >{`xs:${xs}`}</Box>

        <Box
          sx={(t) => ({
            fontSize: '0.6rem',
            [t.breakpoints.only('sm')]: {
              fontWeight: 'bold',
            },
          })}
        >{`sm:${sm}`}</Box>

        <Box
          sx={(t) => ({
            fontSize: '0.6rem',
            [t.breakpoints.only('md')]: {
              fontWeight: 'bold',
            },
          })}
        >{`md:${md}`}</Box>

        <Box
          sx={(t) => ({
            fontSize: '0.6rem',
            [t.breakpoints.only('lg')]: {
              fontWeight: 'bold',
            },
          })}
        >{`lg:${lg}`}</Box>
        <Box
          sx={(t) => ({
            fontSize: '0.6rem',
            [t.breakpoints.only('xl')]: {
              fontWeight: 'bold',
            },
          })}
        >{`xl:${xl}`}</Box>
      </Box>
    </Box>
  );
}
