import React, { Component } from 'react';
import '../App.css'
import PrimarySearchAppBar from '../components/navbar'

import GridOneCategory from '../components/gridOneCategory'
import GridTwoCategory from '../components/gridTwoCategory'


class CategoryPage extends Component {
 
    render(){
      return(
        <div>
            <PrimarySearchAppBar/> 
            <GridOneCategory/>
            <GridTwoCategory/>
        </div>
      
      );
    }
   }
    
   
   export default CategoryPage;