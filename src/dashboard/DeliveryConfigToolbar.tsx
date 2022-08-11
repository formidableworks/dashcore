import { Grid, IconButton, Tooltip, useMediaQuery, useTheme, Box, Button } from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SaveIcon from '@mui/icons-material/Save';

interface Props {
  onFormat: () => void;
  onSave: () => void;
}
export function DeliveryConfigToolbar(props: Props): JSX.Element {
  const { onFormat, onSave } = props;
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));

  const preferIconButtons = isLg || isXs;

  return (
    <Grid item xs={12} sm={12} md>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          marginBottom: 1,
          pl: 1,
          ...(!(isSm || isXs) && { justifyContent: 'flex-end' }),
        }}
      >
        {preferIconButtons ? (
          <>
            <Tooltip title="Format document">
              <IconButton
                onClick={onFormat}
                color="primary"
                size="small"
                aria-label="format document"
              >
                <AutoFixHighIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Save document">
              <IconButton onClick={onSave} color="primary" size="small" aria-label="save document">
                <SaveIcon />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <>
            <Button
              onClick={onFormat}
              size="small"
              variant="outlined"
              startIcon={<AutoFixHighIcon />}
            >
              Format
            </Button>
            <Button onClick={onSave} variant="outlined" startIcon={<SaveIcon />}>
              Save
            </Button>
          </>
        )}
      </Box>
    </Grid>
  );
}
