import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';


export default class Employee extends React.Component {
    constructor() {
        super();
        this.state = {
            employees: []
        };
    }

    fetchEmployees() {
        fetch('/api/employees')
            .then(res => res.json())
            .then(data => {
                this.setState({ employees: data });
            });
    }

    componentDidMount() {
        this.fetchEmployees();
    }




    render() {
        return (
            <Paper style={{
                width: '100%',
                overflowX: 'auto',

            }}>
                <Table style={{
                    minWidth: 650,
                }}
                    aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Rut del Empleado</TableCell>
                            <TableCell align="right">Nombre del Empleado</TableCell>
                            <TableCell align="right">Apellido del Empleado</TableCell>
                            <TableCell align="right">Telefono del Empleado</TableCell>
                            <TableCell align="right">Email del Empleado</TableCell>
                            <TableCell align="right">Tipo de Empleado</TableCell>
                            <TableCell align="right">Operaciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.employees.map(employee => (
                            <TableRow key={employee.rut}>
                                <TableCell component="th" scope="row">
                                    {employee.rut}
                                </TableCell>
                                <TableCell align="right">{employee.nombre}</TableCell>
                                <TableCell align="right">{employee.apellido}</TableCell>
                                <TableCell align="right">{employee.telefono}</TableCell>
                                <TableCell align="right">{employee.email}</TableCell>
                                <TableCell align="right">{employee.tipo}</TableCell>
                                <TableCell align="right">
                                    <CreateIcon/>
                                    <DeleteIcon/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>


        );
    }
}
