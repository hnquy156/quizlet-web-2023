import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchStudySets } from '../../app/api';
import Folders from '../study-folders/Folders';
import StudySets from '../study-sets/StudySets';

const Home = () => {
  const [studySets, setStudySets] = useState([]);
  const [studySetLoading, setStudySetLoading] = useState(false);

  useEffect(() => {
    getStudySets();
  }, []);

  const getStudySets = async () => {
    setStudySetLoading(true);
    const { success, data } = await fetchStudySets();
    setStudySetLoading(false);
    if (success) setStudySets(data);
  };

  return (
    <Box sx={{ m: 4 }}>
      <StudySets
        title="Recent"
        studySets={studySets}
        loading={studySetLoading}
      />
      <Folders title="Folder" />
    </Box>
  );
};

export default Home;
