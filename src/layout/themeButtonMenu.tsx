import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
import BrightnessAutoOutlinedIcon from '@mui/icons-material/BrightnessAutoOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { IconButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { changeThemeType, ThemeType } from '../redux/themeSlice';

export function ThemeButtonMenu(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const themeMode = useAppSelector((s) => s.theme.themeType);
  const dispatch = useAppDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onThemeSelected = (theme: ThemeType) => {
    dispatch(changeThemeType(theme));
    handleClose();
  };

  return (
    <div>
      <Tooltip title="Select Theme" placement="right">
        <IconButton
          id="theme-button"
          aria-controls={open ? 'theme-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          aria-label="orders"
          color="primary"
        >
          {themeMode === 'light' && <WbSunnyOutlinedIcon />}
          {themeMode === 'dark' && <Brightness2OutlinedIcon />}
          {themeMode === 'system' && <BrightnessAutoOutlinedIcon />}
        </IconButton>
      </Tooltip>
      <Menu
        id="theme-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'theme-button',
        }}
      >
        <MenuItem selected={themeMode === 'light'} onClick={() => onThemeSelected('light')}>
          <ListItemIcon>
            <WbSunnyOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Light</ListItemText>
        </MenuItem>

        <MenuItem selected={themeMode === 'dark'} onClick={() => onThemeSelected('dark')}>
          <ListItemIcon>
            <Brightness2OutlinedIcon />
          </ListItemIcon>
          <ListItemText>Dark</ListItemText>
        </MenuItem>

        <MenuItem selected={themeMode === 'system'} onClick={() => onThemeSelected('system')}>
          <ListItemIcon>
            <BrightnessAutoOutlinedIcon />
          </ListItemIcon>
          <ListItemText>System</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
}
