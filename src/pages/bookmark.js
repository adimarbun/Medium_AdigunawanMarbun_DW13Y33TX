import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import NavBar from '../components/navbar';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import BookmarkIcon from '@material-ui/icons/Bookmark';

  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    button:{
        textTransform:"capitalize",
        backgroundColor:"black",
        color:"white"
    },
    paper:{
        backgroundColor:"#D3D3D3",
        margin:" 10px 10px 10px 10px",
        padding:"20px 20px 20px 20px",
    }
  }))

export default function Bookmark() {
  const classes = useStyles();
  
 
  return (
    <Grid className={classes.root}>
        <NavBar/>
        <Grid  xs={12} style={{margin:"5% 10% 20px 10%"}} >
            <Grid item xs={8} >
                <Typography variant="h3">
                    <strong>Bokmarks</strong>
                </Typography>
            </Grid>
            <Grid container xs={7} className={classes.paper} >
                <Grid item xs={0}>
                    <BookmarkIcon  />
                </Grid>
                <Grid item xs={9} >
                    <Typography variant="h4">Offline reading is here.</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained"  className={classes.button}>Upgrade</Button>
                </Grid>
                
            </Grid>
        </Grid>
    </Grid>
  );
}