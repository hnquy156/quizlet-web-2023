import { Box, Divider, IconButton, TextField, Typography } from '@mui/material';
import { DeleteOutline as DeleteIcon } from '@mui/icons-material';

const FlashCard = ({ orderNumber, term, definition, ...props }) => {
  return (
    <Box
      {...props}
      bgcolor="#fff"
      borderRadius={2}
      p={2}
      paddingLeft={4}
      paddingRight={4}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography>{orderNumber}</Typography>
        <Box>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        mt={2}
      >
        <TextField
          label="Enter term"
          variant="standard"
          sx={{ width: '50%', mr: 4 }}
          helperText="TERM"
        >
          {term}
        </TextField>
        <TextField
          label="Enter definition"
          variant="standard"
          sx={{ width: '50%' }}
          helperText="DEFINITION"
        >
          {definition}
        </TextField>
      </Box>
    </Box>
  );
};

export default FlashCard;
