import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography, IconButton } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import "../App.css";
import NavBar from "../components/navbar";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      follow: [
        {
          id: 1,
          name: "Adi Marbun",
          image: "AM",
          date: "4 january 2020",
          responses: "1k",
          like: "100k",
          content:
            "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        },
        {
          id: 2,
          name: "DumbWays",
          image: "DW",
          like: "200k",
          responses: "200",
          date: "1 january 2020",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          id: 3,
          name: "You",
          image: "Y",
          date: "25 Desember 2019",
          like: "200k",
          responses: "100",
          content:
            "aIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal "
        },
        {
          id: 4,
          name: "Marbun",
          image: "M",
          date: "25 Desember 2019",
          like: "20k",
          responses: "99",
          content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <div style={{ margin: "50px 18% 10px 18%" }}>
            <Typography variant="h5">Showing responses for:</Typography>
            <Paper>
              <Grid
                container
                wrap="nowrap"
                style={{ width: "62vw", margin: "10px" }}
              >
                <Grid item xs={9} style={{ margin: "10px " }}>
                  <Typography variant="h5">
                    10 bad habbits of unseccusfull people
                  </Typography>
                  <p>Adi Marbun</p>
                </Grid>
                <Grid
                  item
                  xs={3}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <IconButton>
                    <ThumbUpAltIcon color="primary" />
                    <Typography>300k</Typography>
                  </IconButton>
                  <IconButton>
                    <ChatBubbleOutlineIcon color="primary" />
                    <Typography>1.5 k</Typography>
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </div>
        <div style={{ backgroundColor: "#DCDCDC" }}>
          <div className="follow-root">
            <Grid container spacing={3}>
              <Typography variant="h5">
                <strong>Responses</strong>
              </Typography>
              <Paper style={{ margin: "20px 0" }}>
                <Grid
                  container
                  wrap="nowrap"
                  style={{ width: "62vw", margin: "10px 0 10px 0" }}
                >
                  <Grid item xs={1}>
                    <Fab color="secondary" style={{ marginLeft: "10px" }}>
                      A
                    </Fab>
                  </Grid>
                  <Grid item xs={11}>
                    <TextField
                      id="outlined-basic"
                      label="Write a response..."
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Paper>
              {this.state.follow.map(followItem => (
                <Paper style={{ margin: "10px 0" }}>
                  <Grid>
                    <Grid
                      container
                      wrap="nowrap"
                      style={{ width: "62vw", marginTop: "10px " }}
                    >
                      <Grid item xs={1}>
                        <Fab
                          style={{ marginLeft: "10px" }}
                          color="primary"
                          aria-label="image"
                          key={followItem.image}
                        >
                          {followItem.image}
                        </Fab>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography variant="h6" key={followItem.id}>
                          <strong>{followItem.name}</strong>
                        </Typography>
                        <Typography key={followItem.id}>
                          {followItem.date}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} container>
                    <Grid
                      container
                      wrap="nowrap"
                      style={{ width: "60vw", margin: "0 10px 10px 10px" }}
                    >
                      <Grid item xs={12}>
                        <Typography key={followItem.id}>
                          {followItem.content}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container wrap="nowrap" style={{ width: "62vw" }}>
                    <Grid item xs={9} style={{ margin: "0 10px 10px 0" }}>
                      <IconButton>
                        <ThumbUpAltIcon color="primary" key={followItem.id} />
                        <Typography>{followItem.like}</Typography>
                      </IconButton>
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      key={followItem.id}
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center"
                      }}
                    >
                      {followItem.responses} Responses
                      <IconButton>
                        <BookmarkIcon color="primary" />
                      </IconButton>
                      <IconButton>
                        <ExpandMoreIcon color="primary" />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Paper>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
