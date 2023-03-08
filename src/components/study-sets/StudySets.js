import { Box, Grid } from '@mui/material';
import StudySet from './StudySet';

const StudySets = ({ title }) => {
  return (
    <Box sx={{ mb: 10 }}>
      <h3>{title}</h3>
      <Grid container spacing={2}>
        {Array.from(Array(10).keys()).map((item, index) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
            <StudySet type={2} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StudySets;
