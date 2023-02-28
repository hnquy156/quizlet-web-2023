import { useState } from 'react';
import { Box, Link, List, Tab, Tabs } from '@mui/material';
import TabPanel from '../../app/common/TabPanel';
import { StyledLibraryTabs } from '../../app/assets/styledComponents';
import StudySet from '../../app/common/study-sets/StudySet';
import StudyFolder from '../../app/common/study-sets/StudyFolder';

const LibraryTabs = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
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
          {/* <Tab label="Item Three" /> */}
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
            <StudySet key={index} type={1} />
          ))}
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <List
          sx={{
            overflow: 'auto',
            maxHeight: 300,
          }}
        >
          {Array.from(Array(10).keys()).map((item, index) => (
            <StudyFolder key={index} />
          ))}
        </List>
      </TabPanel>
      <Box sx={{ padding: '8px 15px' }}>
        <Link href="#">View all sets</Link>
      </Box>
    </StyledLibraryTabs>
  );
};

export default LibraryTabs;
