import { Avatar, Box, Typography } from '@mui/material';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

const url = 'https://mui.com/static/images/avatar/2.jpg';

const FolderHeaderLeft = () => {
  return (
    <Box>
      <Box display="flex" alignItems="center">
        <FolderOpenIcon sx={{ mr: 2, fontSize: 40 }} /> <h1>Folder Name</h1>
      </Box>
      <Box display="flex" alignItems="baseline" mt={-1}>
        <Typography>5 sets</Typography>
        <Box display="flex" alignItems="center" ml={2}>
          <Typography color="grey" variant="body1" fontWeight={600}>
            created by
          </Typography>
          <Avatar
            alt="Logo"
            src={url}
            sx={{ mr: 1, ml: 1, width: 20, height: 20 }}
          />
          <Typography variant="body2" fontWeight={600}>
            Quy Hoang
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FolderHeaderLeft;
