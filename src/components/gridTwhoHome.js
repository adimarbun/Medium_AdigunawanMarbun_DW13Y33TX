import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "0 14%",
    marginTop: "30px"
  },
  paper: {
    padding: theme.spacing(2),

    marginLeft: "50px"
  },
  image: {
    width: "10vw",
    height: "20vh"
  }
}));

let populerNumber = 1;

export default function GridTwoHome() {
  const classes = useStyles();
  const [articles, setArticles] = useState([]);
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      const result = await axios("http://localhost:5000/api/v1/articless");
      setArticles(result.data);
    };
    fetchArticles();
  }, []);
  useEffect(() => {
    const fetchPopular = async () => {
      const result = await axios("http://localhost:5000/api/v1/popular");
      setPopular(result.data);
    };
    fetchPopular();
  }, []);

  return (
    <Grid className={classes.root}>
      <Grid container spacing={3} xs={12}>
        <Grid item xs={8}>
          {articles.map(item => (
            <Link
              href={`/articel/?${item.id}`}
              color="inherit"
              underline="none"
            >
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography style={{ color: "gray", fontSize: "14px" }}>
                    {item.content}
                  </Typography>
                  <Typography style={{ fontSize: "14px", marginTop: "10px" }}>
                    {item.users.name} in {item.categories.name}
                  </Typography>
                  <Typography style={{ color: "gray", fontSize: "14px" }}>
                    {item.createdAt}
                  </Typography>
                </Grid>
                <Grid item>
                  <img className={classes.image} src={item.img} />
                </Grid>
              </Grid>
            </Link>
          ))}
        </Grid>
        <Grid item xs>
          <Grid style={{ borderBottomStyle: "ridge", marginBottom: "20px" }}>
            <Typography variant="h5">Populer or Medium</Typography>
          </Grid>

          {popular.map(item => (
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar>{populerNumber++}</Avatar>
              </Grid>
              <Grid item xs>
                <Typography style={{ fontSize: "15px", fontWeight: "bold" }}>
                  {item.title}
                </Typography>
                <Typography style={{ fontSize: "12px" }}>
                  {item.createdAt}
                </Typography>
                <Typography style={{ fontSize: "12px" }}>
                  {item.users.name} in {item.categories.name}
                </Typography>
              </Grid>
            </Grid>
          ))}

          <div style={{ marginTop: "100px" }}>
            <Grid item>
              <Button>Help</Button>
              <Button>Status</Button>
              <Button>Writer</Button>
              <Button>Blog</Button>
              <Button>Carrers</Button>
              <Button>Privacy</Button>
              <Button>Terms</Button>
              <Button>About</Button>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
