import { useEffect, useState } from 'react';
import { Box, List, Tab, Tabs } from '@mui/material';
import TabPanel from '../common/TabPanel';
import { StyledLibraryTabs, StyledLink } from '../styles/styledComponents';
import StudySet from '../study-sets/StudySet';
import StudyFolder from '../study-folders/StudyFolder';
import { fetchStudySets } from '../../app/api/study-set';
import { fetchFolders } from '../../app/api/folder';
import CircularLoading from '../common/CircularLoading';
import { useNavigate } from 'react-router-dom';

const TABS = {
  STUDY_SET: 0,
  FOLDER: 1,
};

let activeTabFlag;

const LibraryTabs = ({ onClose }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(TABS.STUDY_SET);
  const [loading, setLoading] = useState(false);
  const [studySets, setStudySets] = useState([]);
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    if (activeTab === TABS.FOLDER) {
      setFolders([]);
      getFolders(activeTab);
    } else {
      setStudySets([]);
      getStudySets(activeTab);
    }
  }, [activeTab]);

  const getStudySets = async (activedTab) => {
    setLoading(true);
    activeTabFlag = activedTab;
    const { success, data } = await fetchStudySets();

    if (activeTabFlag !== activedTab) return;

    if (success) setStudySets(data);
    setLoading(false);
  };

  const getFolders = async (activedTab) => {
    setLoading(true);
    activeTabFlag = activedTab;
    const { success, data } = await fetchFolders();

    if (activeTabFlag !== activedTab) return;

    if (success) setFolders(data);
    setLoading(false);
  };

  const handleChange = (e, newActiveTab) => {
    setActiveTab(newActiveTab);
  };

  const handleClickStudySet = (index) => {
    onClose();
    navigate(`/study-set/${index}`);
  };

  return (
    <StyledLibraryTabs>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Study Sets" />
          <Tab label="Folders" />
        </Tabs>
      </Box>
      <TabPanel value={activeTab} index={TABS.STUDY_SET}>
        <CircularLoading loading={loading} mt={2} />
        <List
          sx={{
            overflow: 'auto',
            maxHeight: 300,
          }}
        >
          {studySets.map((studySet, index) => (
            <StudySet
              key={index}
              type={1}
              studySet={studySet}
              onClick={() => handleClickStudySet(index)}
            />
          ))}
        </List>
        <Box sx={{ padding: '8px 15px' }}>
          <StyledLink onClick={onClose} to="/user/sets">
            View all sets
          </StyledLink>
        </Box>
      </TabPanel>
      <TabPanel value={activeTab} index={TABS.FOLDER}>
        <CircularLoading loading={loading} mt={2} />
        <List
          sx={{
            overflow: 'auto',
            maxHeight: 300,
          }}
        >
          {folders.map((folder, index) => (
            <StudyFolder key={index} folder={folder} />
          ))}
        </List>
        <Box sx={{ padding: '8px 15px' }}>
          <StyledLink onClick={onClose} to="/user/folders">
            View all folders
          </StyledLink>
        </Box>
      </TabPanel>
    </StyledLibraryTabs>
  );
};

export default LibraryTabs;
