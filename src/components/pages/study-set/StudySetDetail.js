import { Box } from '@mui/material';
import FlashCards from '../../flashcard/brief-flashcard/FlashCards';
import FCDescription from '../../flashcard/FCDescription';
import FCModeButtonGroup from '../../flashcard/FCModeButtonGroup';
import FlashCardGroup from '../../flashcard/flash-card-group/FlashCardGroup';

const StudySetDetail = () => {
  return (
    <Box m={8}>
      <h1>Study Set Name</h1>
      <FCModeButtonGroup />
      <FlashCardGroup />
      <Box mt={4}>
        <FCDescription />
        <FlashCards />
      </Box>
    </Box>
  );
};

export default StudySetDetail;
