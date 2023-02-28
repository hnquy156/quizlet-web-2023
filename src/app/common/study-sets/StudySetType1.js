import { Avatar, IconButton, Typography, ListItemButton } from '@mui/material';

const url = 'https://mui.com/static/images/avatar/2.jpg';

const StudySetType1 = () => {
  return (
    <ListItemButton>
      <div>
        <Typography variant="h6" style={{ fontWeight: 600 }}>
          Study Name
        </Typography>
        <div>
          <IconButton>
            <Avatar style={{ height: 24, width: 24 }} alt="Logo" src={url} />
          </IconButton>{' '}
          <span>User Name</span>
        </div>
      </div>
      <br />
    </ListItemButton>
  );
};

export default StudySetType1;
