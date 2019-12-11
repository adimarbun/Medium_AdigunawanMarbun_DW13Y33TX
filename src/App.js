import React, { Component } from 'react';
import Register from './pages/register';
import Login from './pages/login'
import Home from './pages/home'
import CategoryPage from './pages/categoryPage'
import ArticelDetail from './pages/articelDetail'
import RelatedArticle from './pages/relatedArticle'
import Follow from './pages/follow'
import Comment from './pages/comment'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


class App extends Component {
 
 render(){
   return(
     <Router >
       <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/categoryPage">
            <CategoryPage/>
          </Route>
          <Route path="/articelDetail">
            <ArticelDetail/>
          </Route>
          <Route path="/follow">
            <Follow/>
          </Route>
          <Route path="/comment">
            <Comment/>
          </Route>
          <Route path="/relatedArticle">
            <RelatedArticle/>
          </Route>
          <Route path="/">
            <Register />
          </Route>
        </Switch>
     </Router>
   
   );
 }
}
 

export default App;

