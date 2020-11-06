import React  from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";
import Nav from "../Menu/Nav";



const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Nav/>
            <Grid container spacing={13}>
             <h1>Home Page</h1>
            </Grid>
        </div>
    );
}

export default Home;