import { Typography, ListItemButton, Box } from '@mui/material';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { sxButtonItem } from '../styles/styledSx';

const StudyFolderType3 = ({ folder, ...props }) => {
  const { name, length } = folder;

  return (
    <ListItemButton {...props} sx={sxButtonItem}>
      <Box sx={{ width: '100%' }}>
        <Typography variant="body2" fontWeight={600}>
          {length} sets
        </Typography>
        <Box display="flex" alignItems="center">
          <FolderOpenIcon
            sx={{ fontSize: 30, marginRight: 1, color: 'grey' }}
          />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {name}
          </Typography>
        </Box>
      </Box>
    </ListItemButton>
  );
};

export default StudyFolderType3;
