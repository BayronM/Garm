import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';


export default class Warehouse extends React.Component {
    constructor() {
        super();
        this.state = {
            warehouses: []
        };
    }

    fetchWarehouses() {
        fetch('/api/warehouses')
            .then(res => res.json())
            .then(data => {
                this.setState({ warehouses: data });
            });
    }

    componentDidMount() {
        this.fetchWarehouses();
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
                            <TableCell>Id Bodega</TableCell>
                            <TableCell align="right">Codigo del Bodega</TableCell>
                            <TableCell align="right">Estado del Bodega</TableCell>
                            <TableCell align="right">Operaciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.warehouses.map(warehouse => (
                            <TableRow key={warehouse.id}>
                                <TableCell component="th" scope="row">
                                    {warehouse.id}
                                </TableCell>
                                <TableCell align="right">{warehouse.codigo}</TableCell>
                                <TableCell align="right">{warehouse.estado}</TableCell>
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
