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


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`nav-tabpanel-${index}`}
        aria-labelledby={`nav-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `nav-tab-${index}`,
      'aria-controls': `nav-tabpanel-${index}`,
    };
  }
  
  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={event => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    container:{
      margin:"0 15% 0 15%"
    },
    button:{
        textTransform:"capitalize",
    },
  }))

export default function Story() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
        <NavBar/>
        <Grid className={classes.container}>
        <Grid container xs={12} style={{margin:"5vh 0 5vh 0"}}>
            <Grid item xs={8} >
                <Typography variant="h5">
                    <strong>Your Stories</strong>
                </Typography>
            </Grid>
            <Grid item xs={3} >
                <Button variant="outlined" className={classes.button}>Import a Story</Button>
                <Button variant="outlined" color="primary" className={classes.button}>Write a story</Button>
            </Grid>
        </Grid>
        <AppBar position="static" color="inherit" style={{boxShadow:"none"}}  >
            <Grid item xs={3} >
                <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example" 
                          
                >
                    <LinkTab className={classes.button} label="Drafts 1" href="/drafts" {...a11yProps(0)} />
                    <LinkTab className={classes.button} label="Published" href="/trash" {...a11yProps(1)} /> 
                </Tabs>
            </Grid>
        </AppBar>
        <TabPanel value={value} index={0} >
            <Grid item xs={12} style={{textAlign:"center ", minHeight:"40vh",marginTop:"8%"}}>
                <Typography>You have no drafts</Typography>
                <Typography>Write on the go with our iOS and android apps</Typography>
            </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Grid item xs={12} style={{textAlign:"center ", minHeight:"40vh",marginTop:"8%"}}>
                <Typography>You have no Publish</Typography>
                <Typography>Write now</Typography>
            </Grid>
        </TabPanel>
        </Grid>
    </Paper>
  );
}