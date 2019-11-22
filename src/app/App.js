import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/home';
import Apartment from './Components/apartment';
import Menu from './menu';
import { makeStyles } from '@material-ui/core/styles';
import AddApartment from './Components/AddApartment';

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

function App() {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <Menu />
                <main className={classes.content}>
                    <div className={classes.toolbar} />

                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/apartment/create" component={AddApartment} />
                        <Route path="/apartment" component={Apartment} />

                    </Switch>
                </main>
            </div>
        </Router >
    );
}


export default App;

