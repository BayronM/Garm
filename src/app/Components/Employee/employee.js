import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import IconButton from '@material-ui/core/IconButton';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class Employee extends React.Component {
    constructor() {
        super();
        this.state = {
            employees: [],
            open: false,
            rut: '',
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            tipo: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    openDialog(editid, rutedit, nomedit, apeedit, emailedit, teledit, tipoedit, estedit) {
        this.setState({
            open: true,
            _id: editid,
            rut: rutedit,
            nombre: nomedit,
            apellido: apeedit,
            email: emailedit,
            telefono: teledit,
            tipo: tipoedit,
            estado: estedit,

        })
    }
    closeDialog() {
        this.setState({ open: false });
    }


    handleChange(s) {
        const { name, value } = s.target;
        this.setState({
            [name]: value
        })
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

    editEmployee() {
        fetch(`/api/employees/${this.state._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                rut: this.state.rut,
                nombre: this.state.nombre,
                apellido: this.state.apellido,
                email: this.state.email,
                telefono: this.state.telefono,
                tipo: this.state.telefono,

            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.fetchEmployees();
                this.setState({
                    open: false,
                    _id: '',
                    rut: '',
                    nombre: '',
                    apellido: '',
                    email: '',
                    telefono: '',
                    tipo: '',
                });
            });
    }

    deleteEmployee(id) {
        if (confirm('Seguro que desea Elimiar al Empleado  del sistema ?')) {
            fetch(`/api/employees/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.fetchEmployees();
                });
        }
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
                                <TableCell align="right">
                                    <IconButton color="primary" onClick={() => this.openDialog(employee._id, employee.rut, employee.nombre, employee.apellido, employee.email, employee.telefono, employee.tipo, employee.estado)} aria-label="Edit">
                                        <CreateIcon />
                                    </IconButton>
                                    <IconButton color="secondary" onClick={() => this.deleteEmployee(employee._id)} aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div>
                    <Dialog open={this.state.open} onEnter={console.log("Hey.")}>
                        <DialogTitle>Editar Empleado</DialogTitle>
                        <DialogContent>
                            <TextField
                                name="rut"
                                id="standard-basic"
                                label="Rut del Empleado"
                                margin="normal"
                                align=" center"
                                onChange={this.handleChange}
                                value={this.state.rut}
                            />
                            <TextField
                                name="nombre"
                                id="standard-basic"
                                label="Nombre del Empleado"
                                margin="normal"
                                onChange={this.handleChange}
                                value={this.state.nombre}
                            />
                            <TextField
                                name="apellido"
                                id="standard-basic"
                                label="Apellido del Empleado"
                                margin="normal"
                                onChange={this.handleChange}
                                value={this.state.apellido}
                            />
                            <TextField
                                name="telefono"
                                id="standard-basic"
                                label="Telefono del Empleado"
                                margin="normal"
                                onChange={this.handleChange}
                                value={this.state.telefono}
                            />
                            <TextField
                                name="email"
                                id="standard-basic"
                                label="Email del Empleado"
                                margin="normal"
                                onChange={this.handleChange}
                                value={this.state.email}
                            />

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => this.editEmployee()} color="primary">
                                Guardar
                            </Button>
                            <Button onClick={() => this.closeDialog()} color="secondary">
                                Salir
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>

            </Paper>
        );
    }
}
