import React, { useState } from 'react';
import { Container, Box, TextField, Button, InputAdornment, IconButton } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // try {
    //   const response = await axios.post('API', {
    //     email,
    //     password,
    //   });
    //   console.log('Login successful:', response.data);
      onLogin();
      navigate('/capture');
    // } catch (error) {
    //   console.error('Login failed:', error);
    // }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          padding: 2,
          color: 'var(--primary-color)',
        }}
      >
        <h2>Login</h2>
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton edge="start">
                  <AccountCircle />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton edge="start">
                  <Lock />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2, backgroundColor: 'var(--primary-color)' }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
