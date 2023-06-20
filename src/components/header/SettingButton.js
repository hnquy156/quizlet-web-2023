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
import { useLogoutMutation } from '../../app/api';
import { useNavigate } from 'react-router-dom';

const url = 'https://mui.com/static/images/avatar/2.jpg';

const SettingButton = () => {
  const id = useId();
  const [anchorEl, setAnchorEl] = useState(null);
  const [logout] = useLogoutMutation();
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      const res = await logout().unwrap();
      if (res.success) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    } catch (error) {
      console.error('handleLogout', error);
    }
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar alt="Logo" src={url} />
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
          <ListItemButton onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Popover>
    </>
  );
};

export default SettingButton;
