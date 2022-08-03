import { Avatar, Tooltip, useMediaQuery, useTheme } from '@mui/material';

export function BreakpointIndicator(): JSX.Element {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));
  const isXl = useMediaQuery(theme.breakpoints.only('xl'));
  const { xs, sm, md, lg, xl } = theme.breakpoints.values;
  return (
    <Tooltip
      title={
        <>
          {isXs && `Active breakpoint: extra small - ${xs}px`}
          {isSm && `Active breakpoint: small: ${sm}px`}
          {isMd && `Active breakpoint: medium: ${md}px`}
          {isLg && `Active breakpoint: large: ${lg}px`}
          {isXl && `Active breakpoint: extra large: ${xl}px`}
        </>
      }
      placement="right"
    >
      <Avatar
        sx={(t) => ({
          width: 32,
          height: 32,
          backgroundColor: t.palette.success.main,
          fontSize: '1rem',
        })}
      >
        {isXs && 'xs'}
        {isSm && 'sm'}
        {isMd && 'md'}
        {isLg && 'lg'}
        {isXl && 'xl'}
      </Avatar>
    </Tooltip>
  );
}
