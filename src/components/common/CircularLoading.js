import { Box, CircularProgress } from '@mui/material';

const CircularLoading = ({ loading, ...props }) => {
  return (
    <>
      {loading && (
        <Box display="flex" justifyContent="center" {...props}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default CircularLoading;
