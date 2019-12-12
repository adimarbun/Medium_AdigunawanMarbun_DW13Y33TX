import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/navbar';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';


  
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
    button:{
        textTransform:"capitalize",
    },
  }))

export default function Profile() {
  const classes = useStyles();
  
 
  return (
    <Grid className={classes.root}>
        <NavBar/>
        <Grid  xs={12} style={{margin:"80px 20% 20px 20%"}} >
            <Grid container xs={12} style={{marginBottom:"100px"}} >
                <Grid item xs={9} >
                    <Grid container>
                        <Typography variant="h4"><strong>Adigunawan Marbun</strong></Typography>
                        <Button variant="outlined"  className={classes.button}>Edit Profile</Button>
                    </Grid>
                    <p>1 following</p>
                </Grid>
                <Grid item xs={2}>
                    <Fab color="secondary" aria-label="image" style={{width:"100px" ,height:"100px"}}>
                        <Typography variant="h3">AM</Typography>
                    </Fab>
                </Grid>   
            </Grid>
            <Grid>
               <Typography >Adigunawan Marbun hasn't been active of Medium Yet.Check back later to see their stories, claps, and highlights.</Typography> 
            </Grid>
        </Grid>
    </Grid>
  );
}