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


export default function Home() {

    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography paragraph>
                Garm

            </Typography>
            <Typography paragraph>
                Sistema de gestion de viviendas
        </Typography>
        </React.Fragment>
    );
}


