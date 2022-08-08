import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Box, IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { BreakpointIndicator } from './BreakpointIndicator';
import { OrderShellButtonMenu } from './OrderShellButtonMenu';
import { ThemeButtonMenu } from './ThemeButtonMenu';

export function LeftNavItems(): JSX.Element {
  return (
    <Box
      sx={{
        mt: 1,
        mb: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: (t) => t.spacing(1),
        flexGrow: 1,
      }}
    >
      <OrderShellButtonMenu />

      <Tooltip title="Inventory" placement="right">
        <IconButton component={Link} to="inventory" aria-label="inventory" color="primary">
          <ListAltOutlinedIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Tracking" placement="right">
        <IconButton component={Link} to="tracking" aria-label="tracking" color="primary">
          <LocalShippingOutlinedIcon />
        </IconButton>
      </Tooltip>

      <Box sx={{ flexGrow: 1 }} />

      <BreakpointIndicator />

      <ThemeButtonMenu />

      <Tooltip title="App Settings" placement="right">
        <IconButton aria-label="application settings" color="primary">
          <MoreHorizIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
