import { Typography, ListItemButton, Box } from '@mui/material';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { sxButtonItem } from '../../assets/styledSx';

const StudyFolderType3 = ({ index }) => {
  return (
    <ListItemButton sx={sxButtonItem}>
      <Box sx={{ width: '100%' }}>
        <Typography variant="body2" fontWeight={600}>
          50 sets
        </Typography>
        <Box display="flex" alignItems="center">
          <FolderOpenIcon
            sx={{ fontSize: 30, marginRight: 1, color: 'grey' }}
          />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Study Folder Name {index}
          </Typography>
        </Box>
      </Box>
    </ListItemButton>
  );
};

export default StudyFolderType3;
