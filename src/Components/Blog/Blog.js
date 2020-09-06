import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader,
    Button 
} from '@material-ui/core/';
import ArticleBody from './ArticleBody';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))

const Blog = (props) => {
    const classes = useStyles()
    const articles = props.articles;
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
                     <ArticleBody article={article} key={articles.id}></ArticleBody>
                     
                    //hare grid
                )}
            </Grid>
        </div>
    );
};

export default Blog;