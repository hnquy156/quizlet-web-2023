import { Box, IconButton, Typography } from '@mui/material';
import {
  PlayArrow as PlayArrowIcon,
  Shuffle as ShuffleIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  Settings as SettingsIcon,
  Fullscreen as FullscreenIcon,
} from '@mui/icons-material';

const FlashCardActions = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      borderBottom={2}
      borderColor="gray"
    >
      <Box>
        <IconButton>
          <PlayArrowIcon />
        </IconButton>
        <IconButton>
          <ShuffleIcon />
        </IconButton>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center">
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        <Typography>1/30</Typography>
        <IconButton>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <FullscreenIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FlashCardActions;
