import { Avatar, IconButton, Typography, ListItemButton } from '@mui/material';

const StudySetType1 = ({ studySet }) => {
  const { name, username, avatar } = studySet;

  return (
    <ListItemButton>
      <div>
        <Typography variant="h6" style={{ fontWeight: 600 }}>
          {name}
        </Typography>
        <div>
          <IconButton>
            <Avatar style={{ height: 24, width: 24 }} alt="Logo" src={avatar} />
          </IconButton>{' '}
          <span>{username}</span>
        </div>
      </div>
      <br />
    </ListItemButton>
  );
};

export default StudySetType1;
