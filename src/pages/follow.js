import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import {Button, IconButton} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Fab from '@material-ui/core/Fab';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import '../App.css'


class Follow extends Component {
    constructor(props){
        super(props);
        this.state ={
            follow :[{
                id:1,
                name:"Adi Marbun",
                image:"AM",
                content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },{
                id:2,
                name:"DumbWays",
                image:"DW",
                content:"aIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal "
            }]    
        }
    }
  render(){
  return (
    <div className="follow-root">
        <Grid container spacing={3}>
            <Grid item xs={12} >
                <Button variant="contained" style={{textTransform:"capitalize" ,marginRight:"10px"}}>Books</Button>
                <Button variant="contained" style={{textTransform:"capitalize" ,marginRight:"10px"}}>Self improvement</Button>
                <Button variant="contained" style={{textTransform:"capitalize" ,marginRight:"10px"}}>Productivity</Button>
                <Button variant="contained" style={{textTransform:"capitalize" ,marginRight:"10px"}}>Life</Button>
                <Button variant="contained" style={{textTransform:"capitalize" ,marginRight:"10px"}}>life Lesson</Button> 
            </Grid>
            <Grid container style={{marginBottom:"40px"}}>
                <Grid item xs={1} flex="1" >
                    <Fab  aria-label="like">
                        <FavoriteIcon color="secondary" />
                    </Fab>
                </Grid>
                <Grid item xs={7}>
                    <p>54k Claps</p>
                </Grid>
                <Grid item xs={4}>
                    <IconButton  >
                        <TwitterIcon color="primary" />
                    </IconButton>
                    <IconButton  >
                        <LinkedInIcon color="primary"/>
                    </IconButton>
                    <IconButton  >
                        <FacebookIcon color="primary"/>
                    </IconButton>
                    <IconButton  >
                        <BookmarkIcon />
                    </IconButton>
                    <IconButton  >
                        <MoreHorizIcon/>
                    </IconButton>
                </Grid>
            </Grid>
            <Paper>
                <Grid style={{marginLeft:"5vw"}}>
                    < Typography > 
                        WRITTEN BY
                    </Typography>
                </Grid>
                <Grid item xs={12}container >
                    { this.state.follow.map(
                    (followItem) =>
                    <Grid >
                        <Grid container  wrap="nowrap" style={{width:"60vw" ,margin:"10px 0 10px 0"}}>
                            <Grid item xs={1} >
                                <Fab color="secondary" aria-label="image"
                                    key={followItem.id}>{followItem.image}
                                </Fab>  
                            </Grid>
                            <Grid item xs={9} >
                                <Typography variant="h5"
                                    key={followItem.id}>{followItem.name}
                                </Typography>
                                <Typography
                                key={followItem.id}>{followItem.content}
                                </Typography>
                            </Grid>
                            <Grid item xs={2} >
                                <Button variant="outlined"  href="#outlined-buttons" style={{textTransform:"capitalize" ,color:"green"}}>
                                        Follow
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    )}
                </Grid>
            </Paper>
            <Grid item xs={12}>
                <Button variant="outlined"  href="#outlined-buttons" fullWidth style={{textTransform:"capitalize" ,color:"green"}}>
                    See Responses (215)
                </Button>
            </Grid>
        </Grid>
    </div>
  );
}
}

export default Follow;