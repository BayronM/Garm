import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';



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
                            <TableCell align="right">Complejo Habitacional</TableCell>
                            <TableCell align="right">Estacionamiento de Vivienda</TableCell>
                            <TableCell align="right">Bodega de Vivienda</TableCell>
                            <TableCell align="right">Operaciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.apartments.map(apartment => (
                            <TableRow key={apartment.codigo}>
                                <TableCell component="th" scope="row">
                                    {apartment.codigo}
                                </TableCell>
                                <TableCell align="right">{apartment.codigo}</TableCell>
                                <TableCell align="right">{apartment.com}</TableCell>
                                <TableCell align="right">{apartment.est}</TableCell>
                                <TableCell align="right">{apartment.bod}</TableCell>
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
