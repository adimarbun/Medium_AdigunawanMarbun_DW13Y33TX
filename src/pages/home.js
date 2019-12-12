import React, { Component } from 'react';
import '../App.css'
import NavBar from '../components/navbar'
import Category from "../components/category"
import GridOneHome from "../components/gridOneHome"
import GridTwoHome from '../components/gridTwhoHome';


class Home extends Component {
 
    render(){
      return(
        <div >
            <NavBar/>
            <Category/>
            <GridOneHome/>
            <GridTwoHome/>
        </div>
      );
    }
   }

   
   export default Home;