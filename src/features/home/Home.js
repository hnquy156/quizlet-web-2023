import { Box } from '@mui/material';
import StudySets from '../study-sets/StudySets';

const Home = () => {
  return (
    <Box sx={{ m: 4 }}>
      <StudySets title="Recent" />
    </Box>
  );
};

export default Home;
