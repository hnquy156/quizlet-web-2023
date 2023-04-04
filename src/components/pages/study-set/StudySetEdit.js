import { Box } from '@mui/material';
import Actions from '../../editable-study-set/Actions';
import AddCard from '../../editable-study-set/AddCard';
import SaveButton from '../../editable-study-set/SaveButton';
import FlashCardTable from '../../editable-study-set/FlashCardTable';
import Title from '../../editable-study-set/Title';

const StudySetEdit = () => {
  return (
    <Box m={8} mt={16}>
      <Title />
      <Actions mt={4} />
      <FlashCardTable />
      <AddCard />
      <SaveButton mt={4} />
    </Box>
  );
};

export default StudySetEdit;
