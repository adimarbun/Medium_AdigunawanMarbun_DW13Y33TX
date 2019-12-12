import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import '../App.css'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import NavBar from '../components/navbar'
import Category from "../components/category"
import GridOneHome from "../components/gridOneHome"
import GridTwoHome from '../components/gridTwhoHome';


class Home extends Component {
 
    render(){
      return(
        <div style={{margin:"0px 5% 0px 5%"}}>
            <NavBar/>
            <Category/>
            <GridOneHome/>
            <GridTwoHome/>
        </div>
      
      );
    }
   }
    
   
   export default Home;