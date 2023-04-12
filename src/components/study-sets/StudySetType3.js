import { Typography, ListItemButton, Box } from '@mui/material';
import { sxButtonItem } from '../styles/styledSx';

const StudySetType3 = ({ studySet }) => {
  const { name } = studySet;

  return (
    <ListItemButton sx={sxButtonItem}>
      <Box sx={{ width: '100%' }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {name}
        </Typography>
      </Box>
    </ListItemButton>
  );
};

export default StudySetType3;
