import { Box } from '@mui/material';
import { PageRouter } from './layout/PageRouter';
import { Shell } from './layout/Shell';
import { OrderControls } from './order/OrderControls/OrderControls';

export function App(): JSX.Element {
  return <PageRouter />;
  // return (
  //   <Shell>
  //     <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  //       <OrderControls />
  //     </Box>
  //   </Shell>
  // );
}
