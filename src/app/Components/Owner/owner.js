import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';


export default class Owner extends React.Component {
    constructor() {
        super();
        this.state = {
            owners: []
        };
    }

    fetchOwners() {
        fetch('/api/owners')
            .then(res => res.json())
            .then(data => {
                this.setState({ owners: data });
            });
    }

    componentDidMount() {
        this.fetchOwners();
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
                            <TableCell>Rut Propietario</TableCell>
                            <TableCell align="right">Nombre del Propietario</TableCell>
                            <TableCell align="right">Apellido del Propietario</TableCell>
                            <TableCell align="right">Telefono del Propietario</TableCell>
                            <TableCell align="right">Email del Propietario</TableCell>
                            <TableCell align="right">Operaciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.owners.map(owner => (
                            <TableRow key={owner.rut}>
                                <TableCell component="th" scope="row">
                                    {owner.rut}
                                </TableCell>
                                <TableCell align="right">{owner.nombre}</TableCell>
                                <TableCell align="right">{owner.apellido}</TableCell>
                                <TableCell align="right">{owner.telefono}</TableCell>
                                <TableCell align="right">{owner.email}</TableCell>
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
