import { Divider, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { LeftNavItems } from './LeftNavItems';
import { Logo } from './Logo';

export function Shell(): JSX.Element {
  return (
    <Box
      className="shell.container"
      sx={{
        height: '100vh',
        display: 'flex',
      }}
    >
      <Box
        className="shell.leftnav"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: (t) => t.spacing(6),
          alignItems: 'center',
          borderRightWidth: 'thin',
          borderRightStyle: 'solid',
          borderRightColor: (t) => t.palette.divider,
          backgroundColor: (t) => t.palette.background.default,
          position: 'sticky',
        }}
      >
        <Logo />
        <Divider />
        <LeftNavItems />
      </Box>
      <Box
        className="shell.content"
        sx={{
          width: '100%',
          backgroundColor: (t) => t.palette.background.default,
          overflowY: 'scroll',
        }}
      >
        {/* Page content here */}
        <Outlet />
      </Box>
    </Box>
  );
}
