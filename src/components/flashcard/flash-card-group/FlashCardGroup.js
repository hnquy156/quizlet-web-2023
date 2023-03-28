import { Box } from '@mui/material';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import FlashCard from './FlashCard';
import FlashCardActions from './FlashCardActions';

const FlashCardGroup = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <FlashCard onClick={handleFlip} content="Term" />
        <FlashCard onClick={handleFlip} content="Definition" />
      </ReactCardFlip>
      <FlashCardActions />
    </Box>
  );
};

export default FlashCardGroup;
