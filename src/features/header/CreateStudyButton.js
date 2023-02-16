// import { ExpandMoreOutlined } from '@mui/icons-material';
import { ExpandMore } from '@mui/icons-material';
import { Button } from '@mui/material';
import { StyledCreateButton } from '../../app/assets/styledComponents';
import CreateStudyButtonCard from './CreateStudyButtonCard';

const CreateStudyButton = () => {
  return (
    <StyledCreateButton>
      <Button variant="contained" color="primary">
        Create
        <ExpandMore />
      </Button>
      {true && <CreateStudyButtonCard />}
    </StyledCreateButton>
  );
};

export default CreateStudyButton;
