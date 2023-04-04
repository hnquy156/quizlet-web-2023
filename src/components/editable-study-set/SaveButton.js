import { Box, Button } from '@mui/material';

const SaveButton = (props) => {
  return (
    <Box {...props} display="flex" justifyContent="end">
      <Button variant="contained" size="large">
        Create
      </Button>
    </Box>
  );
};

export default SaveButton;
