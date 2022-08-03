import { Typography } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { OrderOne } from '../order/OrderOne';
import { Shell } from './Shell';

export function PageRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Shell />}>
        <Route index element={<Navigate replace to="/orderone" />} />
        <Route path="orderone" element={<OrderOne />} />
        <Route path="ordertwo" element={<Typography variant="h5">todo order two.</Typography>} />
        <Route path="inventory" element={<Typography variant="h5">theres nowt here.</Typography>} />
        <Route path="tracking" element={<Typography variant="h5">nor here.</Typography>} />
      </Route>
    </Routes>
  );
}
