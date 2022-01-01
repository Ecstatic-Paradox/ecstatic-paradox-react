import React, { Component } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, designation, department, contact) {
    return { name, designation, department, contact };
}

var rows = [

];


export default class GeneralMembers extends Component {

    render() {
        rows = this.props.members.map(mem => createData(mem.first_name + ' ' + mem.last_name, mem.designation, mem.user_department, mem.fb_profile_link ? mem.fb_profile_link : 'Not Available'))
        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} size="medium" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Designation</TableCell>
                            <TableCell align="center">Department</TableCell>
                            <TableCell align="center">Contact</TableCell>
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
                                <TableCell align="center">{row.designation}</TableCell>
                                <TableCell align="center">{row.department}</TableCell>
                                <TableCell align="center">{row.contact}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}
