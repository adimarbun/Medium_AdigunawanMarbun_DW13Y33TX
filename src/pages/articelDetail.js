import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from "../components/navbar";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Follow from "./follow";
import RelatedArticle from "./relatedArticle";
import axios from "axios";
const useStyles = makeStyles(theme => ({
  root: {
    margin: "20px 12% 10px 12%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flex: 1
  }
}));

export default function ArticelDetail() {
  const classes = useStyles();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      var query = window.location.search.slice(1);
      const result = await axios(
        `http://localhost:5000/api/v1/article/${query}`
      );
      setArticles(result.data);
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <Grid>
          <Grid xs={12} container style={{ margin: "15px 0 15px 0" }}>
            <Grid item xs={3} style={{ marginLeft: "10%" }}>
              <img
                src="https://miro.medium.com/max/432/1*IPEsgX_bZKP_7OubdnI7-Q.png"
                width="70%"
              ></img>
            </Grid>
            <Grid item xs={5}>
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
        </Grid>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <img src={articles.img} width="100%"></img>
          </Grid>
        </div>
        <div style={{ margin: "0px 25% 0px 25%" }}>
          <Grid container spacing={3}>
            <Grid xs={12}>
              <h1>{articles.title}</h1>
            </Grid>
            <Grid xs={12}>
              <p>{articles.content}</p>
            </Grid>
          </Grid>
          ;
        </div>
        <Follow />
        <RelatedArticle />
      </div>
      ;
    </div>
  );
}
