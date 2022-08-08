import { Typography } from '@mui/material';
import { JsonEditorRoot } from '../common/JsonEditor/JsonEditorRoot';

export function DeliveryConfigRoot(): JSX.Element {
  return (
    <div>
      <Typography variant="h5">Delivery Config</Typography>
      <JsonEditorRoot />
    </div>
  );
}
