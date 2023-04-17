import { Box, Grid } from '@mui/material';
import CircularLoading from '../common/CircularLoading';
import StudyFolder from './StudyFolder';
import { useNavigate } from 'react-router-dom';

const Folders = ({ title, folders, loading }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ marginBottom: 12 }}>
      <h3>{title}</h3>
      <Grid container spacing={2}>
        {folders.map((folder, index) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
            <StudyFolder
              type={2}
              index={index}
              folder={folder}
              onClick={() => navigate(`/username/folders/${index}`)}
            />
          </Grid>
        ))}
      </Grid>
      <CircularLoading loading={loading} />
    </Box>
  );
};

export default Folders;
