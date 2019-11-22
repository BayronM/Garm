import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';





export default class Apartment extends React.Component {
    constructor() {
        super();
        this.state = {
            apartments: []
        };
    }

    fetchApartments() {
        fetch('/api/apartments')
            .then(res => res.json())
            .then(data => {
                this.setState({ apartments: data });
            });
    }

    componentDidMount() {
        this.fetchApartments();
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
                            <TableCell>Codigo de Vivienda</TableCell>
                            <TableCell align="right">Rut del Dueño</TableCell>
                            <TableCell align="right">Nombre del Dueño</TableCell>
                            <TableCell align="right">Apellido del Dueño</TableCell>
                            <TableCell align="right">Telefono del Dueño</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.apartments.map(apartment => (
                            <TableRow key={apartment.code}>
                                <TableCell component="th" scope="row">
                                    {apartment.code}
                                </TableCell>
                                <TableCell align="right">{apartment.owner.ownerid}</TableCell>
                                <TableCell align="right">{apartment.owner.ownername}</TableCell>
                                <TableCell align="right">{apartment.owner.ownerlastname}</TableCell>
                                <TableCell align="right">{apartment.owner.ownerphone}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>


        );
    }
}
