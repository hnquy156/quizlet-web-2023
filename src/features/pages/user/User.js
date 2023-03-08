import { Avatar, Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { USER_ROUTES } from '../../../app/utils/constant';
import { getCurrentTab } from '../../user/handler';

const url = 'https://mui.com/static/images/avatar/2.jpg';

const User = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(
    getCurrentTab(location.pathname)
  );
  const handleChange = (e, newValue) => {
    navigate('./' + newValue);
    setCurrentTab(newValue);
  };

  return (
    <Box sx={{ margin: 5 }}>
      <Box display="flex">
        <Avatar alt="Logo" src={url} sx={{ height: 70, width: 70, mr: 2 }} />
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typography variant="h6" fontWeight={700}>
            Quy_Hoang7
          </Typography>
          <Typography variant="body1" color="grey" fontWeight={600}>
            Quy Hoang
          </Typography>
        </Box>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={currentTab} onChange={handleChange}>
          <Tab label="Study Sets" value={USER_ROUTES.SET} />
          <Tab label="Folders" value={USER_ROUTES.FOLDER} />
        </Tabs>
      </Box>

      <Outlet />
    </Box>
  );
};

export default User;
