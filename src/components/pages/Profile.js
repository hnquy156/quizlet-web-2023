import { Box, Button, Grid, Typography } from '@mui/material';
import { StyledFormCard, StyledText } from '../styles/styledComponents';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.user.info);

  return (
    <>
      <StyledFormCard>
        <Box
          textAlign="center"
          display="flex"
          flexDirection="column"
          width="50%"
          minWidth={600}
          mt={5}
        >
          <Typography variant="h3">Profile</Typography>
          <Grid container spacing={2} textAlign="start" mt={2}>
            <Grid item xs={3}>
              <StyledText bold="true">Name</StyledText>
            </Grid>
            <Grid item xs={9}>
              <StyledText>{user.name}</StyledText>
            </Grid>
            <Grid item xs={3}>
              <StyledText bold="true">Username</StyledText>
            </Grid>
            <Grid item xs={9}>
              <StyledText>{user.username}</StyledText>
            </Grid>
            <Grid item xs={3}>
              <StyledText bold="true">Phone</StyledText>
            </Grid>
            <Grid item xs={9}>
              <StyledText>{user.phone}</StyledText>
            </Grid>
            <Grid item xs={3}>
              <StyledText bold="true">Email</StyledText>
            </Grid>
            <Grid item xs={9}>
              <StyledText>{user.email}</StyledText>
            </Grid>
          </Grid>
          <Box mt={3} mb={3}>
            <Button size="large" variant="contained" fullWidth type="submit">
              Change Info
            </Button>
          </Box>
          <Button size="large" variant="outlined">
            Change Password
          </Button>
        </Box>
      </StyledFormCard>
    </>
  );
};

export default Profile;
