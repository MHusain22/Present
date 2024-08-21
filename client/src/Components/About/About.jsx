import React from 'react';
import { Container, Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CameraAlt, VerifiedUser, AccessTime, Security } from '@mui/icons-material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            About Our Present
          </Typography>
          <Typography variant="body1" paragraph>
            Our system uses advanced facial recognition technology to automate attendance tracking. It captures images, identifies individuals, and marks attendance instantly, making the process fast and reliable.
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Key Features:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CameraAlt />
              </ListItemIcon>
              <ListItemText primary="Automatic Attendance" secondary="Captures images and marks attendance automatically." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <VerifiedUser />
              </ListItemIcon>
              <ListItemText primary="High Accuracy" secondary="Uses advanced algorithms for precise recognition." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Security />
              </ListItemIcon>
              <ListItemText primary="Secure & Private" secondary="Ensures secure data handling and privacy." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AccessTime />
              </ListItemIcon>
              <ListItemText primary="Time-Saving" secondary="Streamlines the attendance process." />
            </ListItem>
          </List>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;
