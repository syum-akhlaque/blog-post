import React, { useEffect, useState }  from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Blog from './Components/Blog/Blog'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetails from './Components/PostDetails/PostDetails';


function App() {
  const[articles, setArticle] = useState([]);
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data =>  setArticle(data))
  },[]);
  return (
    <div>
        <Header></Header>
        <Router>
         <Switch>
           <Route exact path='/blog'>
           <Blog articles = {articles}></Blog>
           </Route>
           <Route  path='/post/:postId'>
              <PostDetails></PostDetails>
           </Route>
           <Route exact path='/'>
              <Blog articles = {articles}></Blog>
           </Route>
           <Route path='*'>
              <h2> 4O4  not found</h2>
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
