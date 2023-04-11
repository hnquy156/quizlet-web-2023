import {
  Avatar,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Box,
} from '@mui/material';
import { LockPerson as LockPersonIcon } from '@mui/icons-material';

const StudySetType2 = ({ studySet }) => {
  const { name, length, username, avatar } = studySet;

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {name}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', color: 'grey' }}>
            <Typography variant="body2">{length} terms</Typography>
            <LockPersonIcon sx={{ fontSize: 20 }} />
          </Box>
        </CardContent>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{ height: 24, width: 24, mr: 1 }}
            alt="Logo"
            src={avatar}
          />
          <span>{username}</span>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default StudySetType2;
