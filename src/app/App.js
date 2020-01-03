import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/home';
import Apartment from './Components/Apartment/apartment';
import Owner from './Components/Owner/owner';
import Employee from './Components/Employee/employee';
import Parking from './Components/Parking/parking';
import Warehouse from './Components/Warehouse/warehouse';
import HouseComplex from './Components/HouseComplex/housecomplex';

import Menu from './menu';
import { makeStyles } from '@material-ui/core/styles';
import AddApartment from './Components/Apartment/AddApartment';
import AddOwner from './Components/Owner/AddOwner';
import AddEmployee from './Components/Employee/AddEmployee';
import AddParking from './Components/Parking/AddParking';
import AddWarehouse from './Components/Warehouse/AddWarehouse';
import AddHouseComplex from './Components/HouseComplex/AddHouseComplex';

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
                        <Route path="/owner/create" component={AddOwner} />
                        <Route path="/owner" component={Owner} />
                        <Route path="/employee/create" component={AddEmployee} />
                        <Route path="/employee" component={Employee} />
                        <Route path="/parking/create" component={AddParking} />
                        <Route path="/parking" component={Parking} />
                        <Route path="/warehouse/create" component={AddWarehouse} />
                        <Route path="/warehouse" component={Warehouse} />
                        <Route path="/housecomplex/create" component={AddHouseComplex} />
                        <Route path="/housecomplex" component={HouseComplex} />
                    </Switch>
                </main>
            </div>
        </Router >
    );
}


export default App;

