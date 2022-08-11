import { Box } from '@mui/material';
import { OrderControls } from './OrderControls/OrderControls';
import { OrderTwoMuiGrid } from './OrderTwoMuiGrid';

export function OrderTwoRoot(): JSX.Element {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <OrderControls />
      <OrderTwoMuiGrid />
    </Box>
  );
}
