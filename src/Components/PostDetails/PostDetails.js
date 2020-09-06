import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetails.css';
const PostDetails = () => {
    const {postId} = useParams();
    const [article,setArticle] = useState({})
    const [comments,setComments] = useState([])

   useEffect(()=>
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(data => setArticle(data))
        ,[]) 

    useEffect(()=>
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => response.json())
        .then(data => setComments(data))
        ,[])
        let imgNum = Math.floor(Math.random() * 6);
        let logo = require(`../FakeImage/${imgNum}.jpg`);                
    return (
        <div>
            <div className = "postDetails" > 
                <h1> {(article.title)}</h1>
                <p> "{article.body}"</p> 
            </div>
            <div className = "commentSection">
                <h2 >Comments:</h2>
                <ul>
                    {
                        comments.map(comment => <li>  
                            <div className = "singleComment">
                                <div>
                                    <img src={logo} alt="" width="90px"/>
                                </div>
                                <div>
                                    <h4>Email: {comment.email}</h4>
                                    <p> {comment.body}</p>
                                </div>    
                            </div>
                        </li>)
                    }

                </ul>
            </div>
        </div>
    );
};

export default PostDetails;