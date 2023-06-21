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
import { toast } from 'react-toastify';
import { StyledLink, StyledLogin } from '../../styles/styledComponents';
import { SignupSchema } from '../../../utils/schemas';
import { useSignupMutation } from '../../../app/api';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignupSchema),
  });
  const [signup, { isLoading }] = useSignupMutation();
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const timeoutRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignup = async (data) => {
    try {
      const res = await signup(data).unwrap();
      if (res?.success) {
        toast.success('Sign Up Successfully!');
        navigate('/login');
      }
    } catch (error) {
      console.error('handleSignup error:', error);
      setErrorMessage(error?.data?.message || 'Error Occured');

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowRepeatPassword = () => {
    setShowRepeatPassword(!showRepeatPassword);
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
        onSubmit={handleSubmit(handleSignup)}
      >
        <Typography variant="h3">Sign Up</Typography>
        {errorMessage && (
          <Box mt={3}>
            <Alert severity="error" onClose={() => {}}>
              {errorMessage}
            </Alert>
          </Box>
        )}
        <Box mt={3}>
          <TextField
            label="Name"
            fullWidth
            placeholder="Name"
            helperText={errors?.name?.message}
            error={!!errors?.name}
            {...register('name')}
          />
        </Box>
        <Box mt={3}>
          <TextField
            label="Phone"
            fullWidth
            placeholder="Phone"
            helperText={errors?.phone?.message}
            error={!!errors?.phone}
            {...register('phone')}
          />
        </Box>
        <Box mt={3}>
          <TextField
            label="Email"
            fullWidth
            placeholder="Email"
            helperText={errors?.email?.message}
            error={!!errors?.email}
            {...register('email')}
          />
        </Box>
        <Box mt={3}>
          <TextField
            label="Username"
            fullWidth
            placeholder="Username"
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
        <Box mt={3}>
          <TextField
            label="Confirm Password"
            fullWidth
            placeholder="Confirm Password"
            helperText={errors?.repeat_password?.message}
            error={!!errors?.repeat_password}
            type={showRepeatPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowRepeatPassword}
                  onMouseDown={toggleShowRepeatPassword}
                >
                  {showRepeatPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
            {...register('repeat_password')}
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
            Sign Up
          </Button>
        </Box>
        <Button size="large" variant="outlined" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </StyledLogin>
  );
};

export default Signup;
