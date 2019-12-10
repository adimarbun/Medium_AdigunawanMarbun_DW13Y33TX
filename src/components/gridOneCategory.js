import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin:"0px 150px 0px 150px"
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    paddingTop:"10px"
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid item xs>
            <Grid item xs>
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item xs={3} item>
                        <img 
                            src="https://miro.medium.com/max/338/1*cw32fIqCbRWzwJaoQw6BUg.png"
                            width="200vw"
                            height="70vh"
                        />
                        </Grid>
                        <Grid item xs={7} style={{width:"40vw", marginLeft:"10px",marginTop:"20px"}}>
                            <Typography variant="h5" >
                                The front lines of the future. A Medium publication about tech and science.
                            </Typography>
                        </Grid>
                        <Grid item xs={2} style={{marginLeft:"300px",marginTop:"20px",}}>
                            <Button variant="outlined" color="primary" href="#outlined-buttons">
                                    FOLLOW
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={0}>
                        <Card>
                        <img 
                            src="https://miro.medium.com/max/3688/1*Aj6EonMciZjMayKzRbIuvQ.jpeg"
                            width="700vh" 
                            height="350vh"  
                        />
                        </Card>
                        <Card style={{width:"40vw", marginLeft:"10px",paddingTop:"90px",textAlign:"center",alignItems:"center",backgroundColor:"#3300CC"}}> 
                                <h1>Plastic Surgeons Are Using Eye-Tracking Tech to Make Better Breasts</h1>
                                <p>But the eye doesn’t necessarily gaze at what is beautiful</p>
                                <p>Yasmin Tayag
                                Dec 6
                                ·
                                5 min read</p>
        
                        </Card>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={0}>
                        <Card style={{width:"40vw", marginLeft:"10px",paddingTop:"90px",textAlign:"center",alignItems:"center",}}> 
                                <h1>Welcome to a Refreshed OneZero</h1>
                                <p>We have a few new things to share</p>
                                <p>Damon Beres</p>
        
                        </Card>
                        <Card>
                        <img 
                            src="https://miro.medium.com/max/3000/1*FmMLsjcukXpE2EtT-lV2Sw.jpeg"
                            width="900vh" 
                            height="350vh"  
                        />
                        </Card>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" >
                        <Card>
                        <img 
                            src="https://miro.medium.com/max/5938/1*hjnZmMS2URkaXm52z8J5EQ.png"
                            width="700vh" 
                            height="350vh"  
                        />
                        </Card>
                        <Card style={{width:"40vw", marginLeft:"10px",paddingTop:"90px",textAlign:"center",alignItems:"center",backgroundColor:"#3300CC"}}> 
                                <h1>How to Delete Your Slack Messages</h1>
                                <p>If you’re concerned about message retention, solutions are just a few clicks awayx</p>
                                <p>Yasmin Tayag
                                Dec 6
                                ·
                                5 min read</p>
        
                        </Card>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper className={classes.paper}>
                    <div style={{backgroundColor:"yellow" ,width:"100%",height:"250px",textAlign:"center"}}>
                        <h1>Even my oldest Echo, at five years old, works perfectly. This shouldn’t be a shocking revelation, but for a piece of technology these days, it is.”</h1>
                                    <p>But the eye doesn’t necessarily gaze at what is beautiful</p>
                                    <p>Yasmin Tayag
                                    Dec 6
                                    ·
                                    5 min read</p>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    </div>
  );
}