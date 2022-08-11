import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Popover,
  Tooltip,
  Typography,
} from '@mui/material';
import { editor as editorApi, MarkerSeverity } from 'monaco-editor/esm/vs/editor/editor.api';
import { useState } from 'react';

import ErrorIcon from '@mui/icons-material/Error';
import NotesIcon from '@mui/icons-material/Notes';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface Props {
  markers: editorApi.IMarker[];
  onMarkerClick: (marker: editorApi.IMarker) => void;
}
export function IssuesIndicator(props: Props): JSX.Element {
  const { markers, onMarkerClick } = props;
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'issues-popover' : undefined;
  return (
    <div>
      <Button
        onClick={handleClick}
        aria-describedby={id}
        variant="text"
        color={markers.length > 0 ? 'warning' : 'success'}
        startIcon={markers.length > 0 ? <ErrorIcon /> : <CheckCircleIcon color="success" />}
        disabled={!(markers.length > 0)}
        size="small"
      >
        {`${markers.length} ${markers.length === 1 ? 'issue' : 'issues'}`}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <List>
          <Typography sx={{ m: 1, color: 'text.primary' }} variant="subtitle2">
            {`${markers.length} ${markers.length === 1 ? 'issue' : 'issues'}`}
          </Typography>
          <Divider />
          {markers.map((marker) => (
            <ListItem
              key={`${marker.message}${marker.startColumn}${marker.startLineNumber}`}
              disablePadding
            >
              <ListItemButton
                onClick={() => {
                  handleClose();
                  onMarkerClick(marker);
                }}
              >
                <ListItemIcon sx={{ ml: 2 }}>
                  {marker.severity === MarkerSeverity.Hint && (
                    <Tooltip title="Severity: Hint">
                      <NotesIcon />
                    </Tooltip>
                  )}
                  {marker.severity === MarkerSeverity.Info && (
                    <Tooltip title="Severity: Info">
                      <InfoIcon color="info" />
                    </Tooltip>
                  )}
                  {marker.severity === MarkerSeverity.Warning && (
                    <Tooltip title="Severity: Warning">
                      <WarningIcon color="warning" />
                    </Tooltip>
                  )}
                  {marker.severity === MarkerSeverity.Error && (
                    <Tooltip title="Severity: Error">
                      <ErrorIcon color="error" />
                    </Tooltip>
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={`Ln ${marker.startLineNumber}, Col ${marker.startColumn}`}
                  secondary={marker.message}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Popover>
    </div>
  );
}
