import { Typography, ListItemButton, Box } from '@mui/material';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

const StudyFolderType3 = ({ index }) => {
  return (
    <ListItemButton
      sx={{
        bgcolor: '#fff',
        mb: 1,
        borderRadius: 2,
        '&:hover': {
          boxShadow: 3,
        },
      }}
    >
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
