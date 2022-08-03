import { Box } from '@mui/material';
import { MGrid } from './MGrid';
import { OrderControls } from './OrderControls/OrderControls';

export function OrderOne(): JSX.Element {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <OrderControls />
      <MGrid />
    </Box>
  );
}
