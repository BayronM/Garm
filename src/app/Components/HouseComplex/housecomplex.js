import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';


export default class HouseComplex extends React.Component {
    constructor() {
        super();
        this.state = {
            housecomplexs: []
        };
    }

    fetchHouseComplexs() {
        fetch('/api/housecomplexs')
            .then(res => res.json())
            .then(data => {
                this.setState({ housecomplexs: data });
            });
    }

    componentDidMount() {
        this.fetchHouseComplexs();
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
                            <TableCell>ID Complejo Habitacional</TableCell>
                            <TableCell align="right">Nombre del Complejo Habitacional</TableCell>
                            <TableCell align="right">Tipo de Complejo Habitacional</TableCell>
                            <TableCell align="right">Direccion del Complejo Habitacional</TableCell>
                            <TableCell align="right">Comuna del Complejo Habitacional</TableCell>
                            <TableCell align="right">Operaciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.housecomplexs.map(housecomplex => (
                            <TableRow key={housecomplex.id}>
                                <TableCell component="th" scope="row">
                                    {housecomplex.id}
                                </TableCell>
                                <TableCell align="right">{housecomplex.nombre}</TableCell>
                                <TableCell align="right">{housecomplex.tipo}</TableCell>
                                <TableCell align="right">{housecomplex.direccion}</TableCell>
                                <TableCell align="right">{housecomplex.comuna}</TableCell>
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
