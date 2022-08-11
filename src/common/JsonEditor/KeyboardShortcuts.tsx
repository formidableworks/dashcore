import {
  Box,
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Popover,
  Typography,
} from '@mui/material';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useState } from 'react';

export function KeyboardShortcuts(): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'keyboard-shortcuts-popover' : undefined;
  return (
    <div>
      <Button
        onClick={handleClick}
        aria-describedby={id}
        variant="text"
        color="primary"
        startIcon={<KeyboardIcon />}
        size="small"
      >
        keyboard shortcuts
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
        <List dense>
          <Typography sx={{ m: 1 }} variant="subtitle2">
            Keyboard shortcuts
          </Typography>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Auto complete"
              secondary={
                <Box component="span" sx={{ display: 'flex', gap: 1 }}>
                  <Chip component="span" variant="outlined" size="small" label="ctrl" />
                  +
                  <Chip component="span" variant="outlined" size="small" label="space" />
                </Box>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Copy"
              secondary={
                <Box component="span" sx={{ display: 'flex', gap: 1 }}>
                  <Chip component="span" variant="outlined" size="small" label="ctrl" />
                  +
                  <Chip component="span" variant="outlined" size="small" label="c" />
                </Box>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Paste"
              secondary={
                <Box component="span" sx={{ display: 'flex', gap: 1 }}>
                  <Chip component="span" variant="outlined" size="small" label="ctrl" />
                  +
                  <Chip component="span" variant="outlined" size="small" label="v" />
                </Box>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Format"
              secondary={
                <Box component="span" sx={{ display: 'flex', gap: 1 }}>
                  <Chip component="span" variant="outlined" size="small" label="ctrl" />
                  +
                  <Chip component="span" variant="outlined" size="small" label="shift" />
                  +
                  <Chip component="span" variant="outlined" size="small" label="i" />
                </Box>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Command palette"
              secondary={
                <Box component="span" sx={{ display: 'flex', gap: 1 }}>
                  <Chip component="span" variant="outlined" size="small" label="f1" />
                </Box>
              }
            />
          </ListItem>
        </List>
      </Popover>
    </div>
  );
}
