import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function BasicTable({rows}) {
  return (
    <TableContainer component={Paper} style={{width:'70%'}}>
      <Table >
        <TableHead>
          <TableRow >
            <TableCell>Name</TableCell>
            <TableCell>Level</TableCell>
            <TableCell>Avg Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}  >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.level}</TableCell>
              <TableCell>{row.average_score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
