import React, { useEffect, useState }  from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Blog from './Components/Blog/Blog'


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
         
        {
           articles.map(article =>  <Blog article = {article}></Blog> )
        }
        
    </div>
  );
}

export default App;
