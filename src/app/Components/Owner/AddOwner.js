import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';



export default class AddOwner extends React.Component {

    constructor() {
        super();
        this.state = {
            rut: ' ',
            nombre: '',
            apellido: '',
            telefono: '',
            email: '',
            estado: '',
        };
        this.saveOwner = this.saveOwner.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    saveOwner(s) {
        s.preventDefault();
        fetch('/api/owners', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    rut: ' ',
                    nombre: '',
                    apellido: '',
                    telefono: '',
                    email: '',
                    estado: '',
                });
            })
            .catch(err => console.error(err));

    }

    handleChange(s) {
        const { name, value } = s.target;
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <Card style={{
                maxWidth: 300,
                minWidth: 200,
                justifyContent: "center",
                alignItems: "center"
            }}>

                <Typography variant="h5" component="h6" align="center">
                    Ingresar un nuevo propietario
            </Typography>
                <form onSubmit={this.saveOwner}>
                    <CardContent>

                        <TextField
                            name="rut"
                            id="standard-basic"
                            label="Rut del Propietario"
                            margin="normal"
                            align=" center"
                            onChange={this.handleChange}
                            value={this.state.rut}
                        />
                        <TextField
                            name="nombre"
                            id="standard-basic"
                            label="Nombre del Propietario"
                            margin="normal"
                            onChange={this.handleChange}
                            value={this.state.nombre}
                        />
                        <TextField
                            name="apellido"
                            id="standard-basic"
                            label="Apellido del Propietario"
                            margin="normal"
                            onChange={this.handleChange}
                            value={this.state.apellido}
                        />
                        <TextField
                            name="telefono"
                            id="standard-basic"
                            label="Telefono del Propietario"
                            margin="normal"
                            onChange={this.handleChange}
                            value={this.state.telefono}
                        />
                        <TextField
                            name="email"
                            id="standard-basic"
                            label="Email del Propietario"
                            margin="normal"
                            onChange={this.handleChange}
					        value={this.state.email}	
                        />
                        <TextField
                            name="estado"
                            id="standard-basic"
                            label="Estado del Propietario"
                            margin="normal"
                            onChange={this.handleChange}
					        value={this.state.estado}	
                        />
                    </CardContent>
                    <CardActions>
                        <Button type="submit" variant="contained" color="primary" align="center">
                            Guardar
                    </Button>
                    </CardActions>
                </form>
            </Card >

        );
    }
}

