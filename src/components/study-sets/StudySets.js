import { Box, Grid } from '@mui/material';
import CircularLoading from '../common/CircularLoading';
import StudySet from './StudySet';

const StudySets = ({ title, studySets, loading }) => {
  return (
    <Box sx={{ mb: 10 }}>
      <h3>{title}</h3>
      <Grid container spacing={2}>
        {studySets.map((studySet, index) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
            <StudySet type={2} index={index} studySet={studySet} />
          </Grid>
        ))}
      </Grid>
      <CircularLoading loading={loading} />
    </Box>
  );
};

export default StudySets;
