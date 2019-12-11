import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CategoryPage from '../components/navbar'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
  
    margin:"20px 12% 10px 12%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex:1,
  },
}));

export default function ArticelDetail() {
  const classes = useStyles();

  return (
    <div >
        <CategoryPage/>
        <Grid xs={12} container style={{margin:"10px 5% 10px 11%"}}>
            <Grid item xs={3}>
                    <img src="https://miro.medium.com/max/432/1*IPEsgX_bZKP_7OubdnI7-Q.png" width="70%"></img>
            </Grid>
            <Grid item xs={9} >
                <ButtonGroup
                    variant="text"
                    size="large"
                    aria-label="large contained secondary button group"
                    >
                    <Button>MISSION ORIGINAL</Button>
                    <Button>SUBSCRIBE</Button>
                </ButtonGroup>
            </Grid>
        </Grid>
        <div className={classes.root}>
            <Grid container spacing={3}>
                <img src="https://miro.medium.com/max/2649/1*T_wCY9dpnq1jw-AM7BzZ2w.jpeg" width="100%"></img>
            </Grid>
        </div>
        <div style={{margin:"0px 25% 0px 25%"}}>
            <Grid container spacing={3}>
                <Grid xs={12}>
                    <h1>10 Bad Habits of Unsuccessfull People</h1>
                </Grid>
                <Grid xs={12}>
                    <p>10 Bad Habits of Unsuccessfull People</p>
                    <p>THere are 10 of the most common self-imposed barriers. If you find yourself bumping up against one, use them as a signal to reevaluate, reflect, and reverse course.</p>
                    <p><strong>Deep Work: Rules for Focused Success in a Distracted World by Cal Newport</strong> Media consumption went way up in 2017. For most of us, that meant happiness and productivity went way down. The world is becoming noisier and will become more so every day. If you can’t cultivate the ability to have quiet, insightful, deeply focused periods of productive work, you’re going to get screwed. This is a book that explains how to cultivate and protect that skill — the ability to do deep work. I strongly urge you to begin this practice in 2018— if you want to get anything done or perform your best.</p>
                    <p><strong>The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life</strong> by Mark Manson To me, practical philosophy has always been the art knowing what to — and what not to — give a fuck about. That’s what Mark’s book is about. It’s not about apathy. It’s about cultivating indifference to things that don’t matter. Be careful, as Marcus Aurelius warns, not to give the little things more time and thought they deserved. Maybe looking back at this year reveals how much effort you’ve frittered away worrying about the trivial. If so, let 2018 be a year that you only devote energy to things that truly matter — get the important things right by ignoring the insignificant.</p>
                </Grid>
                
            </Grid>
        </div>
    </div>
        
    
  );
}