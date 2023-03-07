import { List } from '@mui/material';
import StudyFolder from '../../app/common/study-sets/StudyFolder';

const FolderTab = () => {
  return (
    <div>
      <h1>User Tabs Folder</h1>
      <List>
        {Array.from(Array(5).keys()).map((item, index) => (
          <StudyFolder type={3} />
        ))}
      </List>
    </div>
  );
};

export default FolderTab;
