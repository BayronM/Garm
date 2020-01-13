import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';



export default class AddApartment extends React.Component {

    constructor() {
        super();
        this.state = {
            codigo: ' ',
            com: '',
            est: '',
            bod: '',
            estado: '',
        };
        this.saveApartment = this.saveApartment.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    saveApartment(s) {
        s.preventDefault();
        fetch('/api/apartments', {
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
                    codigo: ' ',
                    com: '',
                    est: '',
                    bod: '',
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
                    Crear una nueva vivienda
            </Typography>
                <form onSubmit={this.saveApartment}>
                    <CardContent>

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
                        <TextField
                            name="estado"
                            id="standard-basic"
                            label="Estado"
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

