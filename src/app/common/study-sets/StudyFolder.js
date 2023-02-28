import { Typography, ListItemButton } from '@mui/material';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

// const url = 'https://mui.com/static/images/avatar/2.jpg';

const StudyFolder = () => {
  return (
    <ListItemButton>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FolderOpenIcon style={{ marginRight: 4, fontSize: 40 }} />
        <div>
          <div>
            <Typography variant="h6" style={{ fontWeight: 600 }}>
              Folder Name
            </Typography>
          </div>
          <span>6 Sets</span>
        </div>
      </div>
      <br />
    </ListItemButton>
  );
};

export default StudyFolder;
