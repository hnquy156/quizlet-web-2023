import { Box } from '@mui/material';
import FolderHeader from '../../folder-header/FolderHeader';
import StudySets from '../../study-sets/StudySets';

const Folder = () => {
  return (
    <Box m={10} mt={4}>
      <FolderHeader />
      <Box mb={14} />
      <StudySets title="Sets in Folder" />
    </Box>
  );
};
export default Folder;
