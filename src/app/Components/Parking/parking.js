import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';


export default class Parking extends React.Component {
    constructor() {
        super();
        this.state = {
            parkings: []
        };
    }

    fetchParkings() {
        fetch('/api/parkings')
            .then(res => res.json())
            .then(data => {
                this.setState({ parkings: data });
            });
    }

    componentDidMount() {
        this.fetchParkings();
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
                            <TableCell>Id Estacionamiento</TableCell>
                            <TableCell align="right">Codigo del Estacionamiento</TableCell>
                            <TableCell align="right">Estado del Estacionamiento</TableCell>
                            <TableCell align="right">Operaciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.parkings.map(parking => (
                            <TableRow key={parking.id}>
                                <TableCell component="th" scope="row">
                                    {parking.id}
                                </TableCell>
                                <TableCell align="right">{parking.codigo}</TableCell>
                                <TableCell align="right">{parking.estado}</TableCell>
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
