import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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


export default function Apartment() {

    const classes = useStyles();
    return (

        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography paragraph>
                hola
        </Typography>

        </main>
    );
}
