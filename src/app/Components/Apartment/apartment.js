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
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';





export default class Apartment extends React.Component {
    constructor() {
        super();
        this.state = {
            apartments: [],
            open: false,
            codigo: ' ',
            com: '',
            est: '',
            bod: '',
            estado: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    openDialog(editid, codedit, comedit, estedit, bodedit, estadoedit) {

        this.setState({
            open: true,
            _id: editid,
            codigo: codedit,
            com: comedit,
            bod: bodedit,
            est: estedit,
            estado: estadoedit

        });
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


    editApartment() {
        fetch(`/api/apartments/${this.state._id}`, {
            method: 'PUT',
            body: JSON.stringify({

                codigo: this.state.codigo,
                com: this.state.com,
                est: this.state.est,
                bod: this.state.bod,
                estado: this.state.estado
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.fetchApartments();
                this.setState({
                    open: false,
                    _id: '',
                    codigo: '',
                    com: '',
                    bod: '',
                    est: '',
                    estado: ''
                });
            });
    }


    deleteAparment(id) {
        if (confirm('Seguro que desea Elimiar la Vivienda del sistema ?')) {
            fetch(`/api/apartments/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.fetchApartments();
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
                                <TableCell align="right">{apartment.com}</TableCell>
                                <TableCell align="right">{apartment.est}</TableCell>
                                <TableCell align="right">{apartment.bod}</TableCell>
                                <TableCell>
                                    <IconButton color="primary" onClick={() => this.openDialog(apartment._id, apartment.codigo, apartment.com, apartment.est, apartment.bod, apartment.estado)} aria-label="Edit">
                                        <CreateIcon />
                                    </IconButton>
                                    <IconButton color="secondary" onClick={() => this.deleteAparment(apartment._id)} aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div >
                    <Dialog open={this.state.open} onEnter={console.log("Hey.")}>
                        <DialogTitle>Editar Vivienda </DialogTitle>
                        <DialogContent>
                            <TextField
                                name="codigo"
                                id="standard-basic"
                                label="Codigo de Vivienda"
                                margin="normal"
                                align=" center"
                                onChange={this.handleChange}
                                value={this.state.codigo}
                            />
                            <TextField
                                name="com"
                                id="standard-basic"
                                label="Complejo Habitacional"
                                margin="normal"
                                onChange={this.handleChange}
                                value={this.state.com}
                            />
                            <TextField
                                name="est"
                                id="standard-basic"
                                label="Estacionamiento"
                                margin="normal"
                                onChange={this.handleChange}
                                value={this.state.est}
                            />
                            <TextField
                                name="bod"
                                id="standard-basic"
                                label="Bodega"
                                margin="normal"
                                onChange={this.handleChange}
                                value={this.state.bod}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => this.editApartment()} color="primary">
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
