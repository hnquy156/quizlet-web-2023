import { Box } from '@mui/material';
import { StyledLink } from '../styles/styledComponents';

const AddCard = () => {
  return (
    <Box
      bgcolor="#fff"
      borderRadius={2}
      p={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <StyledLink>+ ADD CARD</StyledLink>
    </Box>
  );
};

export default AddCard;
