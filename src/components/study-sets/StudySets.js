import { Box, Grid } from '@mui/material';
import CircularLoading from '../common/CircularLoading';
import StudySet from './StudySet';
import { useNavigate } from 'react-router-dom';

const StudySets = ({ title, studySets, loading }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ mb: 10 }}>
      <h3>{title}</h3>
      <Grid container spacing={2}>
        {studySets.map((studySet, index) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
            <StudySet
              type={2}
              index={index}
              studySet={studySet}
              onClick={() => navigate(`/study-set/${index}`)}
            />
          </Grid>
        ))}
      </Grid>
      <CircularLoading loading={loading} />
    </Box>
  );
};

export default StudySets;
