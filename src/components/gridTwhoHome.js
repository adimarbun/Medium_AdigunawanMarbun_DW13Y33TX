import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin:"0px 5% 0px 5%"
  },
  paper: {
    padding: theme.spacing(2),
   
    marginLeft:'50px'
  },
  image:{
      width:'10vw',
      height:'20vh',
  }
}));

export default function GridTwoHome() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={7} >
        <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs>
                    <h5>Want a Happier, More Fulfilling Life? 75-Year Harvard Study Says Focus on This 1 Thing</h5>
                    <p>I looked at other people and thought,</p>
                </Grid>
                <Grid item>
                <img className={classes.image}
                    src="https://miro.medium.com/max/7520/1*YXsgwCO0CwIwGTtgLp1Sww.jpeg"
                />
                </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs>
                    <h5>A Surprising Thing Happened When I Stopped Eating For 3 Days</h5>
                    <p>I looked at other people and thought,</p>
                </Grid>
                <Grid item>
                <img className={classes.image}
                    src="https://miro.medium.com/max/1018/1*UavZEc38qX_cz4y9EOKwqQ.png"
                />
                </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs>
                    <h5>How to Predict the End of a Relationship</h5>
                    <p>I looked at other people and thought,</p>
                </Grid>
                <Grid item>
                <img className={classes.image}
                    src="https://miro.medium.com/max/3589/1*KcCqgsbx0kZZW0_qwSTgWg.jpeg"
                />
                </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs>
                    <h5>Things I Learned From a Senior Software Engineer</h5>
                    <p>I looked at other people and thought,</p>
                </Grid>
                <Grid item>
                <img className={classes.image}
                    src="https://miro.medium.com/max/6913/0*gbFDDl8S_UFsKAEf"
                />
                </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs>
                    <h5>5 Things the Best People in the World Don’t Do</h5>
                    <p>I looked at other people and thought,</p>
                </Grid>
                <Grid item>
                <img className={classes.image}
                    src="https://miro.medium.com/max/8400/0*OwINDZ529VwW3dv5"
                />
                </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Grid item xs>
                <h2>Populer or Medium</h2>
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>01</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                7 Reasons Why Smart, Hardworking People Don’t Become Successful
                                <p>I looked at other people and thought,</p>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>02</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                How to (Literally) Clean Your Brain
                                <p>What the past decade of glymphatic </p>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>03</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography >
                                Travel Is No Cure for the Mind
                                <p>At this very moment, you may be here:</p>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper> 
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>04</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography >
                                Travel Is No Cure for the Mind
                                <p>At this very moment, you may be here:</p>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <div style={{marginTop:'100px'}}>
                    <Grid item >
                        <Button >Help</Button>
                        <Button >Status</Button>
                        <Button >Writer</Button>
                        <Button >Blog</Button>
                        <Button >Carrers</Button>
                        <Button >Privacy</Button>
                        <Button >Terms</Button>
                        <Button >About</Button>
                    </Grid> 
                </div>  
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}