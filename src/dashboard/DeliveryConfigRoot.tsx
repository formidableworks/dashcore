import { Grid, Typography } from '@mui/material';
import { JsonEditorRoot } from '../common/JsonEditor/JsonEditorRoot';

export function DeliveryConfigRoot(): JSX.Element {
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h5">Delivery Config</Typography>
      </Grid>
      {/* NOTE: JsonEditorRoot will emit multiple grid items. */}
      <JsonEditorRoot />
    </Grid>
  );
}
