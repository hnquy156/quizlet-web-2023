import {
  Alert,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { StyledLink, StyledLogin } from '../../styles/styledComponents';
import { loginSchema } from '../../../utils/schemas';
import { useLoginMutation } from '../../../app/api';
import { useRef, useState } from 'react';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const [login, { isLoading }] = useLoginMutation();
  const [errorMessage, setErrorMessage] = useState('');
  const timeoutRef = useRef();

  const handleLogin = async (data) => {
    try {
      const res = await login(data);
      if (res.error) {
        setErrorMessage('Username or Password is Invalid!');

        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setErrorMessage(''), 3000);
      } else if (res.data?.success) {
        console.log('🚀  res.data:', res.data.data);
      }
    } catch (error) {
      console.log('🚀  error:', error);
    }
  };

  return (
    <StyledLogin>
      <Box
        textAlign="center"
        display="flex"
        flexDirection="column"
        width="50%"
        minWidth={600}
        mt={20}
        component="form"
        onSubmit={handleSubmit(handleLogin)}
      >
        <Typography variant="h3">LOGIN</Typography>
        {errorMessage && (
          <Box mt={3}>
            <Alert severity="error" onClose={() => {}}>
              Username or Password is invalid!
            </Alert>
          </Box>
        )}
        <Box mt={3}>
          <TextField
            label="Username or Email"
            fullWidth
            placeholder="Username or Email"
            helperText={errors?.username?.message}
            error={!!errors?.username}
            {...register('username')}
          />
        </Box>
        <Box mt={3}>
          <TextField
            label="Password"
            fullWidth
            placeholder="Password"
            helperText={errors?.password?.message}
            error={!!errors?.password}
            {...register('password')}
          />
        </Box>
        <Box marginLeft="auto" mb={3} mt={1}>
          <StyledLink>Forgot</StyledLink>
        </Box>
        <Box mb={2}>
          <Button
            size="large"
            variant="contained"
            fullWidth
            type="submit"
            endIcon={isLoading && <CircularProgress color="inherit" />}
            disabled={isLoading}
          >
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
