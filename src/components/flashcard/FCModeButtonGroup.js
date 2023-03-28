import { Box, Button } from '@mui/material';

const FCModeButtonGroup = () => {
  return (
    <Box mb={3}>
      <Button
        variant="outlined"
        sx={{ bgcolor: '#fff', paddingLeft: 3, paddingRight: 3 }}
      >
        Flash Card
      </Button>
    </Box>
  );
};

export default FCModeButtonGroup;
