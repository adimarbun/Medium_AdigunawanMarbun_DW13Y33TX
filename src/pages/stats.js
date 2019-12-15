import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import NavBar from '../components/navbar';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';


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
    button:{
        textTransform:"capitalize",
    },
  }))

export default function Stats() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid className={classes.root}>
        <NavBar/>
        <Grid item xs={12} style={{margin:"0 14% 0 14%"}}>
            <Grid >
                <Grid item xs={12} style={{margin:"60px 0 20px 0"}}>
                    <Typography variant="h3">
                        <strong>Stats</strong>
                    </Typography>
                </Grid>
                <Grid container style={{margin:"20px 0 20px 0"}}>
                    <Grid item xs={8}>Click Story below to view in chart</Grid>
                    <Grid item xs={4}>Learn More about using stats</Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} container style={{marginBottom:"350px"}}>
                <Grid Item xs={4}>
                    <Paper>
                        <Typography variant="h2">0</Typography>
                        <Typography>Views (30 days)</Typography>
                    </Paper>
                </Grid>
                <Grid Item xs={4}>
                    <Paper>
                        <Typography variant="h2">0</Typography>
                        <Typography>Reads (30 days)</Typography>
                    </Paper>
                </Grid>
                <Grid Item xs={4}>
                    <Paper>
                        <Typography variant="h2">0</Typography>
                        <Typography>Fans (30 days)</Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container style={{textAlign:"center"}}>
                <Grid item xs={3}>November 17</Grid>
                <Grid item xs={3}>November 24</Grid>
                <Grid item xs={3}>Desember 1</Grid>
                <Grid item xs={3}>Desember 8</Grid>
            </Grid>
            <Grid style={{textAlign:"center", margin:"15px 0 15px 0"}}>
                <Link color="inherit" underline="none">&lt; Prevs 30 Days </Link > l
                <Link color="primary" underline="none"> Next 30 days &gt;</Link>
            </Grid>
            <AppBar position="static" color="inherit" >
                <Grid item xs={5} >
                    <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"            
                    >
                        <LinkTab className={classes.button} label="stories" href="/drafts" {...a11yProps(0)} />
                        <LinkTab className={classes.button} label="responses" href="/trash" {...a11yProps(1)} /> 
                        <LinkTab className={classes.button} label="series" href="/trash" {...a11yProps(2)} />
                    </Tabs>
                </Grid>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Grid item xs={12} style={{textAlign:"center "}}>
                    <Typography>There are no publish for wich you can view stats</Typography>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Grid item xs={12} style={{textAlign:"center "}}>
                    <Typography>Responses</Typography>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Grid item xs={12} style={{textAlign:"center "}}>
                    <Typography>Series</Typography>
                </Grid>
            </TabPanel>
        </Grid>  
    </Grid>
  );
}