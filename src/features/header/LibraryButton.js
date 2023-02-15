import { Button } from '@mui/material';
import LibraryTabs from './LibraryTabs';
import { StyledLibraryButton } from '../../app/assets/styledComponents';

const LibraryButton = () => {
  return (
    <StyledLibraryButton>
      <Button variant="text">Your Library</Button>
      {false && <LibraryTabs />}
    </StyledLibraryButton>
  );
};

export default LibraryButton;
