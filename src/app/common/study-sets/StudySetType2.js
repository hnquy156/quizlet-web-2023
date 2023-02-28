import {
  Avatar,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Box,
} from '@mui/material';
import { LockPerson as LockPersonIcon } from '@mui/icons-material';

const url = 'https://mui.com/static/images/avatar/2.jpg';

const StudySetType2 = ({ index }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Study Name {index}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', color: 'grey' }}>
            <Typography variant="body2">50 terms</Typography>
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
          <Avatar sx={{ height: 24, width: 24, mr: 1 }} alt="Logo" src={url} />
          <span>User Name 2</span>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default StudySetType2;
