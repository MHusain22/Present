import React, { useState } from 'react';
import { Container, Box, TextField, Button, InputAdornment, IconButton,Alert } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000/api/auth/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      // Store the token
      localStorage.setItem('token', data.token);

      // Optionally, store the role if you need to manage user roles
      localStorage.setItem('role', data.role);
      if (res.ok) {
        console.log('Login successful:', data);
        onLogin();
        navigate('/options');  // Redirect after successful login
      } else {
        setError(data.message);
        console.error('Login failed:', data.message);
      }
    } catch (err) {

      console.error('Error during login:', err);


    }
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

        <h2 style={{ fontSize: "40px" }}>Login</h2>
        {error && <Alert severity="error" sx={{ width: '100%', mb: 2 }}>{error}</Alert>}
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
