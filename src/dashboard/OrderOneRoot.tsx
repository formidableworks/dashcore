import { Box } from '@mui/material';
import { OrderOneMuiGrid } from './OrderOneMuiGrid';
import { OrderControls } from './OrderControls/OrderControls';

export function OrderOneRoot(): JSX.Element {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <OrderControls />
      <OrderOneMuiGrid />
    </Box>
  );
}
