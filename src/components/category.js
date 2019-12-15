import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding:"0 10%",
    marginTop:"8px"
  },
}));

export default function Category() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inhiret" style={{boxShadow:"none"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="inhiret"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab href="home" label="HOME"  />
          <Tab href="categoryPage"label="ONEZERO"  />
          <Tab href="articelDetail" label="ELEMENTAL"  />
          <Tab label="GEN"  />
          <Tab label="ZORA"  />
          <Tab label="FORGE"  />
          <Tab label="HUMAN PARTS" />
          <Tab label="MARKER"  />
          <Tab label="LEVEL"  />
          <Tab label="HEATED"  />
          <Tab label="MODUS"  />
          <Tab label="MORE"  />
        </Tabs>
      </AppBar>
    </div>
  );
}