import React from 'react';
import { render } from 'react-dom';
import { Paper } from '@material-ui/core';
import io from 'socket.io-client';

class App extends React.Component {
    constructor(props) {
        super(props);
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

            <Paper> {messages} </Paper>

        )
    }
}


render(<App />, document.getElementById('root'))