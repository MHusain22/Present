import React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const createData = (srNo, name, rollNo) => {
  return { srNo, name, rollNo };
};

// Dummy data for students
const rows = [
  createData(1, 'John Doe', '1001'),
  createData(2, 'Jane Smith', '1002'),
  createData(3, 'Alice Johnson', '1003'),
  createData(4, 'Bob Brown', '1004'),
  createData(5, 'Charlie Davis', '1005'),
];

const Attendance = () => {
  return (
    <Container maxWidth="md">
      <TableContainer component={Paper} sx={{ marginTop: 4 }}>
        <Table>
          <TableHead>
            <TableRow sx={{background:'var(--primary-color)'}}>
              <TableCell>Sr. No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Roll No.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.srNo}>
                <TableCell>{row.srNo}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.rollNo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Attendance;
