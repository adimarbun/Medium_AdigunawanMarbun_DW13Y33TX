import React, { Component } from "react";
import NavBar from "../components/navbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import { Typography, IconButton } from "@material-ui/core";
import "../App.css";
import "../css/ArticleByPerson.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import StarIcon from "@material-ui/icons/Star";
import TwitterIcon from "@material-ui/icons/Twitter";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";

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
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
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
    backgroundColor: theme.palette.background.paper
  },
  button: {
    textTransform: "capitalize"
  }
}));

const data = {
  follow: [
    {
      id: 1,
      image: "https://miro.medium.com/max/3125/1*JYwFxRHCWMw4cNN0Sw7eOg.jpeg",
      date: "10 january 2020",
      responses: "1k",
      like: "100k",
      title: "Lorem Ipsum is simply dummy text of",
      content: "Neque porro quisquam est, qui dolorem ipsum"
    },
    {
      id: 2,
      image: "https://miro.medium.com/max/6840/0*nRw74b8f82yxwg4C",
      like: "200k",
      responses: "200",
      date: "4 january 2020",
      title: "Neque porro quisquam est, qui dolorem ipsum",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    }
  ]
};
export default function ArticleByPerson() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid>
      <NavBar />
      <Grid xs={12} className="container-cover">
        <Grid container xs={12} className="grid-profile">
          <Grid item xs={10}>
            <Grid container xs={12}>
              <Typography variant="h4">
                <strong>Adigunawan Marbun</strong>
              </Typography>
              <Button
                variant="outlined"
                style={{
                  width: "50px",
                  height: "30px",
                  margin: "5px 0 0 20px",
                  textTransform: "capitalize",
                  fontSize: "12px"
                }}
              >
                Follow
              </Button>
            </Grid>
            <p>
              Bets selling Authors of "Conspirasy",Ego is the Enemy '&' The
              Obstacle Is The Way
            </p>
          </Grid>
          <Grid item xs={2}>
            <Fab
              color="secondary"
              aria-label="image"
              style={{ width: "100px", height: "100px" }}
            >
              <Typography variant="h3">AM</Typography>
            </Fab>
          </Grid>
          <Grid container>
            <Typography style={{ marginRight: "20px" }}>
              100 Following{" "}
            </Typography>
            <Typography style={{ marginRight: "20px" }}>
              200k Followers
            </Typography>
            <TwitterIcon />
          </Grid>
        </Grid>
        <AppBar position="static" color="inherit" style={{ boxShadow: "none" }}>
          <Grid item xs={12}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
            >
              <LinkTab
                className={classes.button}
                label="Profile"
                href="/drafts"
                {...a11yProps(0)}
              />
              <LinkTab
                className={classes.button}
                label="Claps"
                href="/trash"
                {...a11yProps(1)}
              />
              <LinkTab
                className={classes.button}
                label="Highlight"
                href="/trash"
                {...a11yProps(2)}
              />
              <LinkTab
                className={classes.button}
                label="Responses"
                href="/trash"
                {...a11yProps(3)}
              />
            </Tabs>
          </Grid>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Grid item xs={12}>
            {data.follow.map(followItem => (
              <Paper xs={12} className="paper-content">
                <Grid className="grid-content" container>
                  <Grid item xs={1}>
                    <Fab color="primary">AM</Fab>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="h6">Adigunawan Marbun</Typography>
                    <Typography key={followItem.id}>
                      {followItem.date}
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton>
                      <StarIcon />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid container wrap="nowrap">
                    <Grid item xs={12}>
                      <Grid>
                        <img src={followItem.image} className="image"></img>
                      </Grid>
                      <Typography variant="h5" key={followItem.id}>
                        {followItem.title}
                      </Typography>
                      <Typography key={followItem.id}>
                        {followItem.title}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container wrap="nowrap">
                  <Grid item xs={9}>
                    <IconButton>
                      <ThumbUpAltIcon
                        color="primary"
                        style={{ fontSize: "28px" }}
                      />
                      <Typography>{followItem.like}</Typography>
                    </IconButton>
                  </Grid>
                  <Grid item xs={4} key={followItem.id} className="responses">
                    {followItem.responses} Responses
                    <IconButton>
                      <BookmarkIcon color="primary" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid item xs={12} style={{ textAlign: "center " }}>
            <Typography>Claps</Typography>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid item xs={12} style={{ textAlign: "center " }}>
            <Typography>Highlight</Typography>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Grid item xs={12} style={{ textAlign: "center " }}>
            <Typography>Responses</Typography>
          </Grid>
        </TabPanel>
      </Grid>
    </Grid>
  );
}
