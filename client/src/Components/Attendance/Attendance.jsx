import React, { useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const createData = (srNo, name, rollNo) => {
  return { srNo, name, rollNo, status: '' };
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
  const [studentRows, setStudentRows] = useState(rows);

  const handleAttendanceChange = (index, value) => {
    const updatedRows = [...studentRows];
    updatedRows[index].status = value;
    setStudentRows(updatedRows);
  };

  return (
    <Container maxWidth="md">
      <TableContainer component={Paper} sx={{ marginTop: 4 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: 'var(--primary-color)' }}>
              <TableCell>Sr. No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Roll No.</TableCell>
              <TableCell>Attendance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentRows.map((row, index) => (
              <TableRow key={row.srNo}>
                <TableCell>{row.srNo}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.rollNo}</TableCell>
                <TableCell>
                  <RadioGroup
                    row
                    value={row.status}
                    onChange={(e) => handleAttendanceChange(index, e.target.value)}
                  >
                    <FormControlLabel value="Present" control={<Radio />} label="Present" />
                    <FormControlLabel value="Absent" control={<Radio />} label="Absent" />
                  </RadioGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Attendance;
