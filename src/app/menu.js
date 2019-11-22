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
    const [open, setOpen] = React.useState(false);

    const handleClickApartment = () => {
        setOpen(!open);
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
                    <Collapse in={open} timeout="auto" unmountOnExit>
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
                </List>
                <Divider />

            </Drawer>
        </React.Fragment >
    );
}