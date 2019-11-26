import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';


export default class AddParking extends React.Component {

    constructor() {
        super();
        this.state = {
            id: ' ',
            codigo: '',
            estado: '',
        };
        this.saveParking = this.saveParking.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    saveParking(s) {
        s.preventDefault();
        fetch('/api/parkings', {
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
                    codigo: '',
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
                    Ingresar una nuevo puesto de estacionamiento
            </Typography>
                <form onSubmit={this.saveParking}>
                    <CardContent>

                        <TextField
                            name="id"
                            id="standard-basic"
                            label="Id del Estacionamiento"
                            margin="normal"
                            align=" center"
                            onChange={this.handleChange}
                            value={this.state.id}
                        />
                        <TextField
                            name="codigo"
                            id="standard-basic"
                            label="Codigo del estacionamiento"
                            margin="normal"
                            onChange={this.handleChange}
                            value={this.state.codigo}
                        />
                        <TextField
                            name="estado"
                            id="standard-basic"
                            label="Estado del Estacionamiento"
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

