import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom';





class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div><h1>Hello world</h1></div>

        );
    }
}


render(< App />, document.getElementById('root'))