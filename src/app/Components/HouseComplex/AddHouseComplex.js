import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';



export default class AddHouseComplex extends React.Component {

    constructor() {
        super();
        this.state = {
            id: ' ',
            nombre: '',
            tipo: '',
            direccion: '',
            comuna: '',
            estado: '',
        };
        this.saveHouseComplex = this.saveHouseComplex.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    saveHouseComplex(s) {
        s.preventDefault();
        fetch('/api/housecomplexs', {
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
                    id: ' ',
                    nombre: '',
                    tipo: '',
                    direccion: '',
                    comuna: '',
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
                    Ingresar un nuevo Complejo Habitacional
            </Typography>
                <form onSubmit={this.saveHouseComplex}>
                    <CardContent>

                        <TextField
                            name="id"
                            id="standard-basic"
                            label="ID del Complejo Habitacional"
                            margin="normal"
                            align=" center"
                            onChange={this.handleChange}
                            value={this.state.id}
                        />
                        <TextField
                            name="nombre"
                            id="standard-basic"
                            label="Nombre del Complejo Habitacional"
                            margin="normal"
                            onChange={this.handleChange}
                            value={this.state.nombre}
                        />
                        <TextField
                            name="tipo"
                            id="standard-basic"
                            label="Tipo de Complejo Habitacional"
                            margin="normal"
                            onChange={this.handleChange}
                            value={this.state.tipo}
                        />
                        <TextField
                            name="direccion"
                            id="standard-basic"
                            label="Direccion del Complejo Habitacional"
                            margin="normal"
                            onChange={this.handleChange}
                            value={this.state.direccion}
                        />
                        <TextField
                            name="comuna"
                            id="standard-basic"
                            label="Comuna del Complejo Habitacional"
                            margin="normal"
                            onChange={this.handleChange}
					        value={this.state.comuna}	
                        />
                        <TextField
                            name="estado"
                            id="standard-basic"
                            label="Estado del Complejo Habitacional"
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

