import { Box } from '@mui/material';
import FolderHeaderLeft from './FolderHeaderLeft';
import FolderHeaderRight from './FolderHeaderRight';

const FolderHeader = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <FolderHeaderLeft />
      <FolderHeaderRight />
    </Box>
  );
};

export default FolderHeader;
