import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import Collapse from '@material-ui/core/Collapse';
import AddIcon from '@material-ui/icons/Add';
import ApartmentIcon from '@material-ui/icons/Apartment';
import ListIcon from '@material-ui/icons/List';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import WorkIcon from '@material-ui/icons/Work';
import StorageIcon from '@material-ui/icons/Storage';





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
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function ClippedDrawer() {
    const classes = useStyles();
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [open6, setOpen6] = React.useState(false);
    const handleClickApartment = () => {
        setOpen1(!open1);
    };
    const handleClickOwner = () => {
        setOpen2(!open2);
    };
    const handleClickEmployee = () => {
        setOpen3(!open3);
    };
    const handleClickParking = () => {
        setOpen4(!open4);
    };
    const handleClickWarehouse = () => {
        setOpen5(!open5);
    };
    const handleClickHouseComplex = () => {
        setOpen6(!open6);
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Garm
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar} />
                <List>

                    <ListItem button component={Link} to='/'>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary="Inicio" />
                    </ListItem>
                    <ListItem button onClick={handleClickApartment}>
                        <ListItemIcon><ApartmentIcon /></ListItemIcon>
                        <ListItemText primary="Viviendas" />
                    </ListItem>
                    <Collapse in={open1} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem
                                button
                                className={classes.nested}
                                component={Link} to='/apartment'>
                                <ListItemIcon>
                                    <ListIcon />
                                </ListItemIcon>
                                <ListItemText primary="Lista de Viviendas " />
                            </ListItem>
                            <ListItem
                                button
                                className={classes.nested}
                                component={Link} to='/apartment/create'>
                                <ListItemIcon>
                                    <AddIcon />
                                </ListItemIcon>
                                <ListItemText primary="Agregar Vivienda " />
                            </ListItem>

                        </List>
                    </Collapse>
                    <ListItem button component={Link} to='/'>
                        <ListItemIcon><PeopleIcon /></ListItemIcon>
                        <ListItemText primary="Residentes" />
                    </ListItem>
                    <ListItem button onClick={handleClickOwner}>
                        <ListItemIcon><PersonIcon /></ListItemIcon>
                        <ListItemText primary="Propietarios" />
                    </ListItem>
                    <Collapse in={open2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem
                                button
                                className={classes.nested}
                                component={Link} to='/owner'>
                                <ListItemIcon>
                                    <ListIcon />
                                </ListItemIcon>
                                <ListItemText primary="Lista de Propietarios " />
                            </ListItem>
                            <ListItem
                                button
                                className={classes.nested}
                                component={Link} to='/owner/create'>
                                <ListItemIcon>
                                    <AddIcon />
                                </ListItemIcon>
                                <ListItemText primary="Agregar Propietario " />
                            </ListItem>

                        </List>
                    </Collapse>
                    <ListItem button onClick={handleClickEmployee}>
                        <ListItemIcon><WorkIcon /></ListItemIcon>
                        <ListItemText primary="Empleados" />
                    </ListItem>
                    <Collapse in={open3} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem
                                button
                                className={classes.nested}
                                component={Link} to='/employee'>
                                <ListItemIcon>
                                    <ListIcon />
                                </ListItemIcon>
                                <ListItemText primary="Lista de Empleados " />
                            </ListItem>
                            <ListItem
                                button
                                className={classes.nested}
                                component={Link} to='/employee/create'>
                                <ListItemIcon>
                                    <AddIcon />
                                </ListItemIcon>
                                <ListItemText primary="Agregar Empleado " />
                            </ListItem>

                        </List>
                    </Collapse>
                    <ListItem button onClick={handleClickParking}>
                        <ListItemIcon><DirectionsCarIcon /></ListItemIcon>
                        <ListItemText primary="Estacionamiento" />
                    </ListItem>
                    <Collapse in={open4} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem
                                button
                                className={classes.nested}
                                component={Link} to='/parking'>
                                <ListItemIcon>
                                    <ListIcon />
                                </ListItemIcon>
                                <ListItemText primary="Lista de Puestos de Estacionamiento " />
                            </ListItem>
                            <ListItem
                                button
                                className={classes.nested}
                                component={Link} to='/parking/create'>
                                <ListItemIcon>
                                    <AddIcon />
                                </ListItemIcon>
                                <ListItemText primary="Agregar Puesto de estacionamiento " />
                            </ListItem>

                        </List>
                    </Collapse>
                    <ListItem button onClick={handleClickWarehouse}>
                        <ListItemIcon><StorageIcon /></ListItemIcon>
                        <ListItemText primary="Bodega" />
                    </ListItem>
                    <Collapse in={open5} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem
                                button
                                className={classes.nested}
                                component={Link} to='/warehouse'>
                                <ListItemIcon>
                                    <ListIcon />
                                </ListItemIcon>
                                <ListItemText primary="Lista de Puestos de Bodega " />
                            </ListItem>
                            <ListItem
                                button
                                className={classes.nested}
                                component={Link} to='/warehouse/create'>
                                <ListItemIcon>
                                    <AddIcon />
                                </ListItemIcon>
                                <ListItemText primary="Agregar Puesto de bodega " />
                            </ListItem>

                        </List>
                    </Collapse>
                    <ListItem button onClick={handleClickHouseComplex}>
                        <ListItemIcon><StorageIcon /></ListItemIcon>
                        <ListItemText primary="Complejo Habitacional" />
                    </ListItem>
                    <Collapse in={open6} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem
                                button
                                className={classes.nested}
                                component={Link} to='/housecomplex'>
                                <ListItemIcon>
                                    <ListIcon />
                                </ListItemIcon>
                                <ListItemText primary="Lista de Complejos Habitacionales" />
                            </ListItem>
                            <ListItem
                                button
                                className={classes.nested}
                                component={Link} to='/housecomplex/create'>
                                <ListItemIcon>
                                    <AddIcon />
                                </ListItemIcon>
                                <ListItemText primary="Agregar Complejo Habitacional " />
                            </ListItem>

                        </List>
                    </Collapse>
                </List>
                <Divider />

            </Drawer>
        </React.Fragment >
    );
}