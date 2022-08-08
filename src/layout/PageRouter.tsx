import { Typography } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { OrderOneRoot } from '../dashboard/OrderOneRoot';
import { OrderTwoRoot } from '../dashboard/OrderTwoRoot';
import { Shell } from './Shell';

export function PageRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Shell />}>
        <Route index element={<Navigate replace to="/orderone" />} />
        <Route path="orderone" element={<OrderOneRoot />} />
        <Route path="ordertwo" element={<OrderTwoRoot />} />
        <Route path="inventory" element={<Typography variant="h5">theres nowt here.</Typography>} />
        <Route path="tracking" element={<Typography variant="h5">nor here.</Typography>} />
      </Route>
    </Routes>
  );
}
