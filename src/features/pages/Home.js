import { Box } from '@mui/material';
import Folders from '../study-sets/Folders';
import StudySets from '../study-sets/StudySets';

const Home = () => {
  return (
    <Box sx={{ m: 4 }}>
      <StudySets title="Recent" />
      <Folders title="Folder" />
    </Box>
  );
};

export default Home;
