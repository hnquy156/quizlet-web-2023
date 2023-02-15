import { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import TabPanel from '../../app/common/TabPanel';
import { StyledLibraryTabs } from '../../app/assets/styledComponents';

const LibraryTabs = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    console.log('e', e);
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
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
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
