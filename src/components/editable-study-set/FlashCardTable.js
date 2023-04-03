import { Box } from '@mui/material';
import FlashCard from './FlashCard';

const FlashCardTable = () => {
  return (
    <Box mt={4}>
      {Array.from(Array(5).keys()).map((item, index) => (
        <FlashCard
          key={index}
          orderNumber={index + 1}
          term={'term'}
          definition={'definition'}
          mb={2}
        />
      ))}
    </Box>
  );
};

export default FlashCardTable;
