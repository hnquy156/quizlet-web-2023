import {
  Alert,
  Box,
  Button,
  CircularProgress,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { StyledLink, StyledLogin } from '../../styles/styledComponents';
import { loginSchema } from '../../../utils/schemas';
import { useLoginMutation } from '../../../app/api';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

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
  const [showPassword, setShowPassword] = useState(false);
  const timeoutRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async (data) => {
    try {
      const res = await login(data).unwrap();
      if (res?.success) {
        const { token } = res.data;
        localStorage.setItem('token', token);
        navigate('/');
      }
    } catch (error) {
      console.error('handleLogin error:', error);
      setErrorMessage('Username or Password is Invalid!');

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowPassword}
                  onMouseDown={toggleShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
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
