import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../components/navbar";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import BookmarkIcon from "@material-ui/icons/Bookmark";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  button: {
    textTransform: "capitalize",
    backgroundColor: "black",
    color: "white"
  },
  paper: {
    padding: "20px 20px 20px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "ridge"
  }
}));

export default function Bookmark() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <NavBar />
      <Grid xs={12} style={{ margin: "10px 10% 20px 10%" }}>
        <Grid item xs={8}>
          <Typography variant="h3">
            <strong>Bokmarks</strong>
          </Typography>
        </Grid>
        <Grid container xs className={classes.paper}>
          <Grid
            item
            xs={1}
            style={{ borderRightStyle: "solid", marginRight: "10px" }}
          >
            <BookmarkIcon />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h4">Offline reading is here.</Typography>
          </Grid>
          <Grid
            item
            xs={2}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button variant="contained" className={classes.button}>
              Upgrade
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
