import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Grid from "@material-ui/core/Grid";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function NewStory() {
  const classes = useStyles();
  const [value, setValue] = useState(" ");

  const handleOnChange = (e, editor) => {
    const data = editor.getData();
    setValue(data);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton href="home">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL3slOsyzlOfLxrimEWMWrrtob843HSb_P9P5Q_RCXXWheySIW"
              style={{ width: "5vh" }}
            ></img>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Draft
          </Typography>
          <Button color="primary" variant="contained">
            publish
          </Button>
          <IconButton color="inherit">
            <MoreHorizIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsNoneIcon />
          </IconButton>
          <Fab color="secondary" size="small">
            A
          </Fab>
        </Toolbar>
      </AppBar>
      <Grid container xs={12} wrap="nowrap" style={{ marginTop: "30px" }}>
        <Grid item xs={2}>
          <IconButton color="inherit">
            <AddCircleOutlineIcon style={{ width: "100%", height: "10vh" }} />
          </IconButton>
        </Grid>
        <Grid item xs={9}>
          <CKEditor editor={ClassicEditor} onChange={handleOnChange} />
        </Grid>
      </Grid>
      <div>{value}</div>
    </div>
  );
}
