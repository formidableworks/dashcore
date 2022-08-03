import * as React from 'react';
import Menu from '@mui/material/Menu';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import MenuItem from '@mui/material/MenuItem';
import { IconButton, ListItemText, Tooltip } from '@mui/material';
import { Link, useMatch } from 'react-router-dom';

export function OrderShellButtonMenu(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const orderOneMatch = useMatch('/orderone');
  const orderTwoMatch = useMatch('/ordertwo');
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title="Orders" placement="right">
        <IconButton
          id="orders-button"
          aria-controls={open ? 'orders-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          aria-label="orders"
          color="primary"
        >
          <LocalGroceryStoreOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="orders-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'orders-button',
        }}
      >
        <MenuItem component={Link} selected={!!orderOneMatch} to="orderone" onClick={handleClose}>
          <ListItemText secondary="Using mui breakpoints">Order v1</ListItemText>
        </MenuItem>
        <MenuItem component={Link} selected={!!orderTwoMatch} to="ordertwo" onClick={handleClose}>
          <ListItemText secondary="v1 with input fields">Order v2</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
}
