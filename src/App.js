import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Blog from './Components/Blog/Blog'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostDetails from './Components/PostDetails/PostDetails';


function App() {
  
  return (
    <div>
        <Header></Header>
        <Router>
         <Switch>
           <Route exact path='/blog'>
              <Blog></Blog>
           </Route>
           <Route  path='/post/:postId'>
              <PostDetails></PostDetails>
           </Route>
           <Route exact path='/'>
              <Blog ></Blog>
           </Route>
           <Route path='*'>
              <h2 style={{textAlign:"center"}}> 4O4  not found</h2>
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
