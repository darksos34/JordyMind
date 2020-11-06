import React  from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";



const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

const HomePage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

            </Grid>
        </div>
    );
}

export default HomePage;