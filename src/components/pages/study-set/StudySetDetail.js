import { Box } from '@mui/material';
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
        <div>FC Table contain Items</div>
      </Box>
    </Box>
  );
};

export default StudySetDetail;
