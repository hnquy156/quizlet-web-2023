import { Settings as SettingIcon, AccountCircle } from '@mui/icons-material';
import {
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
} from '@mui/material';
import { useId, useState } from 'react';
import { anchorOriginLeft } from '../../utils/constant';

const url = 'https://mui.com/static/images/avatar/2.jpg';

const SettingButton = () => {
  const id = useId();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton>
        <Avatar alt="Logo" src={url} onClick={handleClick} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOriginLeft}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <Avatar alt="Logo" src={url} />
            </ListItemIcon>
            <ListItemText
              primary="QuyHoang_7"
              color="black"
              secondary="hnquy.hbt@gmail.com"
            />
          </ListItem>
          <Divider sx={{ mb: 1 }} />
          <ListItemButton>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <SettingIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
          <Divider sx={{ mb: 1, mt: 1 }} />
          <ListItemButton>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Popover>
    </>
  );
};

export default SettingButton;
