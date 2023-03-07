import { Typography, ListItemButton, Box } from '@mui/material';
import { sxButtonItem } from '../../assets/styledSx';

const StudySetType3 = ({ index }) => {
  return (
    <ListItemButton sx={sxButtonItem}>
      <Box sx={{ width: '100%' }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Study Set Name {index}
        </Typography>
      </Box>
    </ListItemButton>
  );
};

export default StudySetType3;
