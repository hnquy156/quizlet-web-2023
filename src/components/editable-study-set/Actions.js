import { Box, Typography } from '@mui/material';
import { StyledIconButton, StyledLink } from '../styles/styledComponents';
import { SyncAlt as SyncAltIcon } from '@mui/icons-material';

const Actions = (props) => {
  return (
    <Box
      {...props}
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <StyledLink>+ Import</StyledLink>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography>Visible to everyone</Typography>
          <StyledLink>change</StyledLink>
        </Box>
        <Box mr={2} ml={2}>
          <Typography>Only editable by me</Typography>
          <StyledLink>change</StyledLink>
        </Box>
        <StyledIconButton>
          <SyncAltIcon />
        </StyledIconButton>
      </Box>
    </Box>
  );
};

export default Actions;
