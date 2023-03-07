import { Avatar, Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const url = 'https://mui.com/static/images/avatar/2.jpg';

const User = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(0);
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
          <Tab label="Study Sets" value="sets" />
          <Tab label="Folders" value="folders" />
        </Tabs>
      </Box>

      <Outlet />
    </Box>
  );
};

export default User;
