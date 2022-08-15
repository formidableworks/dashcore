import { Grid, Typography } from '@mui/material';
import { JsonEditorRoot } from '../common/JsonEditor/JsonEditorRoot';
import {
  useGetDeliveryConfigQuery,
  useUpdateDeliveryConfigMutation,
} from '../redux/api/deliveryConfigApi';

export function DeliveryConfigRoot(): JSX.Element {
  const { jsonString } = useGetDeliveryConfigQuery(undefined, {
    selectFromResult: (result) => ({ jsonString: result.data?.value, ...result }),
  });

  const [updateTrigger] = useUpdateDeliveryConfigMutation();

  return (
    <Grid container>
      <Grid item>
        <Typography variant="h5">Delivery Config</Typography>
      </Grid>
      {/* NOTE: JsonEditorRoot will emit multiple grid items. */}
      <JsonEditorRoot
        value={jsonString}
        onSave={(val) => updateTrigger({ value: val })}
        editorPath="DELIVERY_CONFIG"
      />
    </Grid>
  );
}
