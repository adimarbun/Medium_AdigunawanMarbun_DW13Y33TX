import React, { Component } from 'react';
import '../App.css'
import Navbar from '../components/navbar'

import GridOneCategory from '../components/gridOneCategory'
import GridTwoCategory from '../components/gridTwoCategory'


class CategoryPage extends Component {
 
    render(){
      return(
        <div>
            <Navbar/> 
            <GridOneCategory/>
            <GridTwoCategory/>
        </div>
      
      );
    }
   }
    
   
   export default CategoryPage;