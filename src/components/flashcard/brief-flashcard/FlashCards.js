import { Box } from '@mui/material';
import BriefCard from './BriefCard';
import Title from './Title';

const FlashCards = () => {
  return (
    <Box>
      <Title />
      <Box mt={4}>
        {Array.from(Array(5).keys()).map((item, index) => (
          <BriefCard key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default FlashCards;
