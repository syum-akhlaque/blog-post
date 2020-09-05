import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import './blog.css';
const Blog = (props) => {

    const {title, body} = props.article;
    const sliceTitle = title.slice(0, 15)
    const sliceBody = body.slice(0, 150)
  
    
    return ( 
       <div className = 'singlePost'> 
         <Grid item xs={6} sm={3}>
            {/* <Card className={classes.root} > */}
            <Card  >

            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {sliceTitle}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {sliceBody}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                See More ...
                </Button>
            </CardActions>
            </Card> 
          </Grid>
        </div>    
    );
};

export default Blog;