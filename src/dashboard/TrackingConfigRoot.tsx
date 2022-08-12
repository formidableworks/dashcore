import { Grid, Typography } from '@mui/material';
import { JsonEditorRoot } from '../common/JsonEditor/JsonEditorRoot';

export function TrackingConfigRoot(): JSX.Element {
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h5">Tracking Config</Typography>
      </Grid>
      {/* NOTE: JsonEditorRoot will emit multiple grid items. */}
      <JsonEditorRoot
        value={`
          {
            "signature_required": "yes indeed", "customer_id": "1235339", "service_tier": "invalid enum val",
            "address": {
              "addressee": "Stringer Bell",
              "premise_identifier": "Barksdale towers",
            },
            "handling_tags": [
              "fragile",
              "fragile"
            ],
            "dimensions": {
              "width": -1,
              "height": 4,
              "depth": 1000
            }
          }
          `}
        onSave={(val) => console.log('jsonPut', val)}
        editorPath="TRACKING_CONFIG"
      />
    </Grid>
  );
}
