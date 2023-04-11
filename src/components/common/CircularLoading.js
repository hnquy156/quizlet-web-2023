import { Box, CircularProgress } from '@mui/material';

const CircularLoading = ({ loading }) => {
  return (
    <>
      {loading && (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default CircularLoading;
