import React, { Component } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, country, spectrum, email) {
    return { name, country, spectrum, email };
}

const rows = [
    createData('John Doe', 'Nepal', 'Web Department', 'ohndoe@gmail.com'),
    createData('Pratik Bashyal', 'Nepal', 'Web Department', 'ohndoe@gmail.com'),
    createData('Suman Acharya', 'Nepal', 'Web Department', 'ohndoe@gmail.com'),
    createData('Sudarshan Chapagain', 'Nepal', 'Web Department', 'ohndoe@gmail.com'),
];


export default class GeneralMembers extends Component {
    render() {
        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} size="medium" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Spectrum</TableCell>
                            <TableCell align="center">Country</TableCell>
                            <TableCell align="center">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.spectrum}</TableCell>
                                <TableCell align="center">{row.country}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}
