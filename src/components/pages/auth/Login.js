import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
import { StyledLink, StyledLogin } from '../../styles/styledComponents';

const Login = () => {
  // const { register } = useForm();

  return (
    <StyledLogin>
      <Box
        textAlign="center"
        display="flex"
        flexDirection="column"
        width="50%"
        minWidth={600}
        mt={20}
      >
        <Typography variant="h3">LOGIN</Typography>
        <Box mt={3}>
          <TextField
            label="Username or Email"
            fullWidth
            placeholder="Username or Email"
          />
        </Box>
        <Box mt={3}>
          <TextField label="Password" fullWidth placeholder="Password" />
        </Box>
        <Box marginLeft="auto" mb={3} mt={1}>
          <StyledLink>Forgot</StyledLink>
        </Box>
        <Box mb={2}>
          <Button size="large" variant="contained" fullWidth>
            Login
          </Button>
        </Box>
        <Button size="large" variant="outlined">
          Create An Acount
        </Button>
      </Box>
    </StyledLogin>
  );
};

export default Login;
