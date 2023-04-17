import { Box } from '@mui/material';
import FolderHeader from '../../folder-header/FolderHeader';
import StudySets from '../../study-sets/StudySets';
import { useEffect, useState } from 'react';
import { fetchStudySets } from '../../../app/api';

const Folder = () => {
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
    <Box m={10} mt={4}>
      <FolderHeader />
      <Box mb={14} />
      <StudySets
        title="Sets in Folder"
        studySets={studySets}
        loading={studySetLoading}
      />
    </Box>
  );
};
export default Folder;
