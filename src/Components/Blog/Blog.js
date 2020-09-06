import React ,{ useEffect, useState } from 'react';
import './blog.css'
import { makeStyles } from '@material-ui/core/styles'
import {Grid} from '@material-ui/core/';
import ArticleBody from './ArticleBody';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))

const Blog = () => {
    const classes = useStyles()
    const[articles, setArticle] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data =>  setArticle(data))
    },[]);

    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                {articles.map(article => 
                     <ArticleBody article={article} key={article.id} ></ArticleBody>
                    //hare grid
                )}
            </Grid>
        </div>
    );
};

export default Blog;