import { List } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchFolders } from '../../../app/api';
import CircularLoading from '../../common/CircularLoading';
import StudyFolder from '../../study-folders/StudyFolder';

const FolderTab = () => {
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getStudySets();
  }, []);

  const getStudySets = async () => {
    setLoading(true);
    const { success, data } = await fetchFolders();
    if (success) setFolders(data);
    setLoading(false);
  };

  return (
    <div>
      <List>
        {folders.map((folder, index) => (
          <StudyFolder key={index} type={3} folder={folder} />
        ))}
      </List>
      <CircularLoading loading={loading} mt={2} />
    </div>
  );
};

export default FolderTab;
