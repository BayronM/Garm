import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';



export default class AddApartment extends React.Component {

    constructor() {
        super();
        this.state = {
            code: ' ',
            ownerid: '',
            ownername: '',
            ownerlastname: '',
            ownerphone: '',
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
                    code: ' ',
                    ownerid: '',
                    ownername: '',
                    ownerlastname: '',
                    ownerphone: '',
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
                            name="code"
                            id="standard-basic"
                            label="Codigo de Vivienda"
                            margin="normal"
                            align=" center"
                            onChange={this.handleChange}
                            value={this.state.code}
                        />
                        <TextField
                            name="ownerid"
                            id="standard-basic"
                            label="Rut del dueño"
                            margin="normal"
                            onChange={this.handleChange}
                            value={this.state.ownerid}
                        />
                        <TextField
                            name="ownername"
                            id="standard-basic"
                            label="Nombre del dueño"
                            margin="normal"
                            onChange={this.handleChange}
                            value={this.state.ownername}
                        />
                        <TextField
                            name="ownerlastname"
                            id="standard-basic"
                            label="Apellido del dueño"
                            margin="normal"
                            onChange={this.handleChange}
                            value={this.state.ownerlastname}
                        />
                        <TextField
                            name="ownerphone"
                            id="standard-basic"
                            label="Telefono del Dueño"
                            margin="normal"
                            onChange={this.ownerphone}
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

