import { Box, IconButton } from '@mui/material';
import {
  Star as StarIcon,
  Edit as EditIcon,
  VolumeUp as VolumeUpIcon,
} from '@mui/icons-material';

const Actions = () => {
  return (
    <Box>
      <IconButton>
        <StarIcon />
      </IconButton>
      <IconButton>
        <VolumeUpIcon />
      </IconButton>
      <IconButton>
        <EditIcon />
      </IconButton>
    </Box>
  );
};

export default Actions;
