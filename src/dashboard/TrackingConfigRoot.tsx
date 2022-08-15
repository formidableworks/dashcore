import { Grid, Typography } from '@mui/material';
import { JsonEditorRoot } from '../common/JsonEditor/JsonEditorRoot';
import {
  useGetTrackingConfigQuery,
  useUpdateTrackingConfigMutation,
} from '../redux/api/trackingConfigApi';

export function TrackingConfigRoot(): JSX.Element {
  const { jsonString } = useGetTrackingConfigQuery(undefined, {
    selectFromResult: (result) => ({ jsonString: result.data?.value, ...result }),
  });

  const [updateTrigger] = useUpdateTrackingConfigMutation();

  return (
    <Grid container>
      <Grid item>
        <Typography variant="h5">Tracking Config</Typography>
      </Grid>
      {/* NOTE: JsonEditorRoot will emit multiple grid items. */}
      <JsonEditorRoot
        value={jsonString}
        onSave={(val) => updateTrigger({ value: val })}
        editorPath="TRACKING_CONFIG"
      />
    </Grid>
  );
}
