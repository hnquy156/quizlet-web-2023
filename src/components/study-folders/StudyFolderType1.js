import { Typography, ListItemButton } from '@mui/material';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

// const url = 'https://mui.com/static/images/avatar/2.jpg';

const StudyFolderType1 = ({ folder, ...props }) => {
  const { name, length } = folder;

  return (
    <ListItemButton {...props}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FolderOpenIcon style={{ marginRight: 4, fontSize: 40 }} />
        <div>
          <div>
            <Typography variant="h6" style={{ fontWeight: 600 }}>
              {name}
            </Typography>
          </div>
          <span>{length} Sets</span>
        </div>
      </div>
      <br />
    </ListItemButton>
  );
};

export default StudyFolderType1;
