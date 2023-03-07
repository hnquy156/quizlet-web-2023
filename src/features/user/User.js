import { Avatar, Box, List, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import StudyFolder from '../../app/common/study-sets/StudyFolder';
import StudySet from '../../app/common/study-sets/StudySet';
import TabPanel from '../../app/common/TabPanel';
import FolderTab from './FolderTab';

const url = 'https://mui.com/static/images/avatar/2.jpg';

const User = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleChange = (e, newValue) => {
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
        <Tabs
          value={currentTab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Study Sets" />
          <Tab label="Folders" />
        </Tabs>
      </Box>
      <TabPanel value={currentTab} index={0}>
        <List>
          {Array.from(Array(6).keys()).map((item, index) => (
            <StudySet key={index} type={1} />
          ))}
        </List>
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        {/* <List>
          {Array.from(Array(6).keys()).map((item, index) => (
            <StudyFolder key={index} />
          ))}
        </List> */}
        <FolderTab />
      </TabPanel>
      <Outlet />
    </Box>
  );
};

export default User;
