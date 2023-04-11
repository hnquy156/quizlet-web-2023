import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchFolders, fetchStudySets } from '../../app/api';
import Folders from '../study-folders/Folders';
import StudySets from '../study-sets/StudySets';

const Home = () => {
  const [studySets, setStudySets] = useState([]);
  const [folders, setFolders] = useState([]);
  const [studySetLoading, setStudySetLoading] = useState(false);
  const [folderLoading, setFolderLoading] = useState(false);

  useEffect(() => {
    getStudySets();
    getFolders();
  }, []);

  const getStudySets = async () => {
    setStudySetLoading(true);
    const { success, data } = await fetchStudySets();
    setStudySetLoading(false);
    if (success) setStudySets(data);
  };

  const getFolders = async () => {
    setFolderLoading(true);
    const { success, data } = await fetchFolders();
    setFolderLoading(false);
    if (success) setFolders(data);
  };

  return (
    <Box sx={{ m: 4 }}>
      <StudySets
        title="Recent"
        studySets={studySets}
        loading={studySetLoading}
      />
      <Folders title="Folder" folders={folders} loading={folderLoading} />
    </Box>
  );
};

export default Home;
