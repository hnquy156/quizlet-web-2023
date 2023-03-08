import { List } from '@mui/material';
import StudyFolder from '../../study-folders/StudyFolder';

const FolderTab = () => {
  return (
    <div>
      <h1>User Tabs Folder</h1>
      <List>
        {Array.from(Array(5).keys()).map((item, index) => (
          <StudyFolder key={index} type={3} />
        ))}
      </List>
    </div>
  );
};

export default FolderTab;
