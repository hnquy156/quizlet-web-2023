import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import FlashCard from './FlashCard';

const MOCK_DATA = [
  { term: 'term 1', definition: 'definition 1' },
  { term: 'term 2', definition: 'definition 2' },
  { term: 'term 3', definition: 'definition 3' },
  { term: 'term 4', definition: 'definition 4' },
  { term: 'term 5', definition: 'definition 5' },
  { term: '', definition: '' },
];

const FlashCardTable = () => {
  const ref = useRef();
  const [positionY, setPositionY] = useState([]);
  const [flashcards, setFlashcards] = useState(MOCK_DATA);

  useEffect(() => {
    console.log('children', ref?.current?.children?.length);
    const children = ref?.current?.children || [];
    const offsetTops = [];
    for (let i = 0; i < children?.length; i++) {
      offsetTops.push(children[i].offsetTop);
    }
    setPositionY(offsetTops);
  }, []);

  const changeFlashCardOrder = (currentPosition, newPosition) => {
    const items = [];
    for (let i = 0; i < flashcards.length; i++) {
      if (i === currentPosition) continue;

      if (i === newPosition && newPosition < currentPosition)
        items.push(flashcards[currentPosition]);

      items.push(flashcards[i]);

      if (i === newPosition && newPosition > currentPosition)
        items.push(flashcards[currentPosition]);
    }
    setFlashcards(items);
  };

  const handleDrop = (index, offsetTop) => {
    if (positionY.length <= 1) return;
    if (offsetTop < positionY[0] && index !== 0) {
      return changeFlashCardOrder(index, 0);
    }
    if (
      offsetTop > positionY[positionY.length - 1] &&
      index !== positionY.length - 1
    ) {
      return changeFlashCardOrder(index, positionY.length - 1);
    }

    for (let i = 0; i < positionY.length - 1; i++) {
      if (i === index || i === index - 1) continue;

      const shouldSwapped =
        positionY[i] < offsetTop && offsetTop < positionY[i + 1];

      if (shouldSwapped) {
        return changeFlashCardOrder(index, index > i ? i + 1 : i);
      }
    }
  };

  return (
    <Box mt={4} ref={ref}>
      {flashcards.map((flashCard, index) => (
        <FlashCard
          key={index}
          positionY={positionY[index]}
          index={index}
          term={flashCard.term}
          definition={flashCard.definition}
          onDrop={handleDrop}
          mb={2}
        />
      ))}
    </Box>
  );
};

export default FlashCardTable;
