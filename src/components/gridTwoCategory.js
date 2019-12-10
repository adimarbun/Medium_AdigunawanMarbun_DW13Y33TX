import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "0px 150px 0px 150px",
    flex:1,

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function GridTwoCategory() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{margin:"10px 10% 0px 10%"}}>
            <Grid container spacing={3} style={{marginTop:"10px"}}>
              <Paper>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs>
                        <h5>Want a Happier, More Fulfilling Life? 75-Year Harvard Study Says Focus on This 1 Thing</h5>
                        <p>I looked at other people and thought,</p>
                    </Grid>
                    <Grid item xs={3}>
                    <img style={{width:"100%"}}
                        src="https://miro.medium.com/max/7520/1*YXsgwCO0CwIwGTtgLp1Sww.jpeg"
                    />
                    </Grid>
                </Grid>
            </Paper> 
            </Grid>
            <Grid container spacing={3} style={{marginTop:"10px"}}>
              <Paper>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs>
                        <h5>Want a Happier, More Fulfilling Life? 75-Year Harvard Study Says Focus on This 1 Thing</h5>
                        <p>I looked at other people and thought,</p>
                    </Grid>
                    <Grid item xs={3}>
                    <img style={{width:"100%"}}
                        src="https://miro.medium.com/max/7520/1*YXsgwCO0CwIwGTtgLp1Sww.jpeg"
                    />
                    </Grid>
                </Grid>
            </Paper> 
            </Grid>
        </div>
    </div>
  );
}