import { Box, Button, TextField, Typography } from '@mui/material';

const Title = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Typography variant="h5" fontWeight={600}>
          Create a new study set
        </Typography>
        <Button variant="contained">Create</Button>
      </Box>
      <TextField
        label="Title"
        variant="standard"
        sx={{ width: '50%', mb: 1 }}
      />
      <TextField label="Description" variant="standard" sx={{ width: '50%' }} />
    </Box>
  );
};

export default Title;
