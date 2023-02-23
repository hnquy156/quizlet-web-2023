import { useState } from 'react';
import { Box, Button, Link, List, Tab, Tabs, Typography } from '@mui/material';
import TabPanel from '../../app/common/TabPanel';
import { StyledLibraryTabs } from '../../app/assets/styledComponents';
import StudySet from '../../app/common/study-sets/StudySet';

const LibraryTabs = ({ isShow }) => {
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    // console.log('e', e);
    setValue(newValue);
  };

  return (
    <StyledLibraryTabs>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Study Sets" />
          <Tab label="Folders" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <List
          sx={{
            overflow: 'auto',
            maxHeight: 300,
          }}
        >
          {Array.from(Array(10).keys()).map((item, index) => (
            <StudySet key={index} />
          ))}
        </List>
        <Box sx={{ padding: '8px 15px' }}>
          <Link href="#">View all sets</Link>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </StyledLibraryTabs>
  );
};

export default LibraryTabs;
