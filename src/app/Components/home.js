import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core'
import io from 'socket.io-client'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));


export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        this.socket = io('/')
        this.socket.on('arduino', message => {
            this.setState({ messages: [message, ...this.state.messages] })
        })
    }
    render() {
        const messages = this.state.messages.map((message, index) => {
            return <li key={index}>
                <b>{message}</b>
            </li>
            });
            
            return (
                <React.Fragment>
                    <Typography paragraph>
                        Garm
    
            </Typography>
                    <Typography paragraph>
                        Sistema de gestion de viviendas
        </Typography>
                    <Paper>
                        
                        UIDs Arduino
                        {messages}

                    </Paper>
                </React.Fragment>
            );
        }

}


