import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  

const Blog = (props) => {

    const {title, body} = props.article;
    const classes = useStyles();
    
    return ( 
       <div className = "newsCard"> 
            <Card className={classes.root} >
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {body}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                See More ...
                </Button>
            </CardActions>
            </Card> 
        </div>    
    );
};

export default Blog;