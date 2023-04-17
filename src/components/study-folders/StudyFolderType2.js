import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Box,
} from '@mui/material';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { LockPerson as LockPersonIcon } from '@mui/icons-material';

const StudyFolderType2 = ({ folder, ...props }) => {
  const { name, length } = folder;

  return (
    <Card {...props} sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <FolderOpenIcon
              sx={{ display: 'inline-block', fontSize: 40, marginRight: 2 }}
            />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {name}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  color: 'grey',
                  alignItems: 'center',
                }}
              >
                <Typography variant="body2">{length} sets</Typography>
                <LockPersonIcon sx={{ fontSize: 20, marginLeft: 1 }} />
              </Box>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default StudyFolderType2;
