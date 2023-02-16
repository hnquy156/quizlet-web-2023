import { Button } from '@mui/material';
import LibraryTabs from './LibraryTabs';
import { StyledLibraryButton } from '../../app/assets/styledComponents';
import { ExpandMore } from '@mui/icons-material';

const LibraryButton = () => {
  return (
    <StyledLibraryButton>
      <Button variant="text" color="inherit">
        Your Library <ExpandMore />
      </Button>
      {false && <LibraryTabs />}
    </StyledLibraryButton>
  );
};

export default LibraryButton;
