import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography,IconButton, Link } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import '../App.css'
import NavBar from '../components/navbar'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';

class ArticleDetail extends Component {
    constructor(props){
        super(props);
        this.state ={
            article :[{
                id:1,
                name:"Adi Marbun",
                image:"https://miro.medium.com/max/3125/1*JYwFxRHCWMw4cNN0Sw7eOg.jpeg",
                date:"4 january 2020",
                picture:"AM",
                content:"Neque porro quisquam est, qui dolorem ipsum quia dolor .."
            },
            {
                id:2,
                name:"DumbWays",
                image:"https://miro.medium.com/max/6840/0*nRw74b8f82yxwg4C",
                picture:"DW",
                date:"4 january 2020",
                content:"Lorem Ipsum is simply dummy text of the printing ."
            },
            {
                id:3,
                name:"Marbun",
                image:"https://miro.medium.com/max/8400/0*V6bJR8rs05df7eSA",
                date:"25 Desember 2019",
                picture:"M",
                content:"There are many variations of passages of Lorem Ipsum available."
            }]    
        }
    }
    render(){
        return (
        <div>
            <div style={{margin:"0 5% 0 5%"}}>
                <Grid item xs="12" style={{marginLeft:"20px"}}>
                    <Typography variant="h5">
                        <strong>More For Medium</strong>
                    </Typography> 
                </Grid>
                <Grid container wrap="nowrap">
                    { this.state.article.map(
                    (articleItem) =>
                    <Grid  item xs ="4">
                        <Grid style={{margin:"5% 5% 5% 5%"}}  >
                            <p>More from mission.org</p>
                            <Grid  >
                                <img src={articleItem.image}  width="100%"
                                key={articleItem.image}>
                                </img>  
                            </Grid>
                            <Grid  style={{margin:"5px 5px 5px 5px"}}>
                                <Typography variant="h6"
                                    key={articleItem.id}>{articleItem.content}     
                                </Typography> 
                            </Grid>
                            <Grid container  wrap="nowrap" >
                                <Grid item xs={2}  >
                                    <Fab color="primary" 
                                        key={articleItem.id}>{articleItem.picture}
                                    </Fab>  
                                </Grid>
                                <Grid item xs={7} >
                                    <Typography>
                                        {articleItem.name} in Mission.org
                                    </Typography> 
                                    <Typography>
                                        {articleItem.date} 
                                    </Typography>
                                </Grid>
                                <Grid container="nowrap" item xs={3} >
                                    <IconButton  >
                                        <ThumbUpAltIcon/>
                                    </IconButton>    
                                    <IconButton  >
                                        <ExpandMoreIcon color="primary" />
                                    </IconButton>  
                                </Grid>
                            </Grid>  
                        </Grid>      
                    </Grid>
                    )}
                </Grid>
            </div>
            <div style={{backgroundColor:"black",}}>
                <div style={{margin:"0 5% 0 5%"}}>
                    <div>.
                    <Grid container wrap="nowrap" style={{ marginBottom:"20px",marginTop:"20px"}} >
                        <Grid  item xs ="4">
                            <Typography variant="h5"style={{color:"white"}}>
                                Discover Medium
                            </Typography>
                            <p style={{color:"white"}}>
                                Welcome to a place where words matter.On Medium ,smart voices and original ideas take center stage -with no ads in sight.Watch
                            </p>
                        </Grid>
                        <Grid  item xs ="4">
                            <Typography variant="h5" style={{color:"white"}}>
                                Make Medium yours
                            </Typography>
                            <p style={{color:"white"}}>
                                Follow all the topics you care about, and we'll deliver the best stories for you to your homepage and inbox.explore
                            </p>
                        </Grid>
                        <Grid  item xs ="4">
                            <Typography variant="h5" style={{color:"white"}}>
                                Become a member
                            </Typography>
                            <p style={{color:"white"}}>
                                Get unlimited acces to the best stories on Medium -- and support writters while you're at it.just $5/month.Upgrade
                            </p>
                        </Grid> 
                    </Grid>
                    </div>
                    <Grid container wrap="nowrap" > 
                        <Grid item xs="8">
                            <Grid>
                                <Typography variant="h4" style={{color:"white"}}>
                                    Medium
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs="4">
                            <Grid container wrap="nowrap">
                                <Grid item xs="4">
                                    <Link variant="h6" style={{color:"white"}}>
                                        About
                                    </Link>
                                </Grid>
                                <Grid item xs="4">
                                    <Link variant="h6" style={{color:"white"}}>
                                        Help
                                    </Link>
                                </Grid>
                                <Grid item xs="4">
                                    <Link variant="h6" style={{color:"white"}}>
                                        Legal
                                    </Link>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
        );
    }
}

export default ArticleDetail;