import { Box } from '@mui/material';
import {
  Add as AddIcon,
  LocalLibraryOutlined as LocalLibraryIcon,
  MoreHoriz as MoreHorizIcon,
  IosShare as IosShareIcon,
} from '@mui/icons-material';
import { StyledIconButton } from '../styles/styledComponents';

const FolderHeaderRight = () => {
  return (
    <Box>
      <StyledIconButton>
        <AddIcon />
      </StyledIconButton>
      <StyledIconButton>
        <LocalLibraryIcon />
      </StyledIconButton>
      <StyledIconButton>
        <IosShareIcon />
      </StyledIconButton>
      <StyledIconButton>
        <MoreHorizIcon />
      </StyledIconButton>
    </Box>
  );
};

export default FolderHeaderRight;
