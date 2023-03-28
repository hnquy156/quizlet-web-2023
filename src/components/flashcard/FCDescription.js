import { Avatar, Box, Typography } from '@mui/material';
import { StyledIconButton } from '../styles/styledComponents';
import {
  Add as AddIcon,
  Edit as EditIcon,
  MoreHoriz as MoreHorizIcon,
  IosShare as IosShareIcon,
} from '@mui/icons-material';
const url = 'https://mui.com/static/images/avatar/2.jpg';

const FCDescription = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Avatar alt="Logo" src={url} sx={{ height: 40, width: 40, mr: 2 }} />
          <Box>
            <Typography>Created by</Typography>
            <Typography fontWeight={600}>Quy_Hoang7</Typography>
          </Box>
        </Box>
        <Box>
          <StyledIconButton>
            <AddIcon />
          </StyledIconButton>
          <StyledIconButton>
            <EditIcon />
          </StyledIconButton>
          <StyledIconButton>
            <IosShareIcon />
          </StyledIconButton>
          <StyledIconButton>
            <MoreHorizIcon />
          </StyledIconButton>
        </Box>
      </Box>
      <Box mt={2}>
        <Typography>Description ................</Typography>
      </Box>
    </Box>
  );
};

export default FCDescription;
