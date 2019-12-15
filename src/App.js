import React, { Component } from 'react'
import Register from './pages/register'
import Login from './pages/login'
import Home from './pages/home'
import CategoryPage from './pages/categoryPage'
import ArticelDetail from './pages/articelDetail'
import RelatedArticle from './pages/relatedArticle'
import Follow from './pages/follow'
import Comment from './pages/comment'
import NewStory from './pages/newStory'
import Story from './pages/story'
import Stats from './pages/stats'
import Bookmark from './pages/bookmark'
import Profile from './pages/profile'
import ArticleByPerson from './pages/articleByPerson'
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
          <Route path="/regiter">
            <Register/>
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
          <Route path="/newStory">
            <NewStory/>
          </Route>
          <Route path="/story">
            <Story/>
          </Route>
          <Route path="/stats">
            <Stats/>
          </Route>
          <Route path="/bookmark">
            <Bookmark/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/articleByPerson">
            <ArticleByPerson/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
     </Router>
   );
 }
}
 

export default App;

