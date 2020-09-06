import React from 'react';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader,
    Button 
} from '@material-ui/core/'
import { Link } from 'react-router-dom';

const ArticleBody = (props) => {
    const {title,id, body} = props.article;
    const sliceTitle = title.slice(0, 15);
    const sliceBody = body.slice(0, 90);
    return (
        <>  
            <Grid item xs={12} sm={6} md={3} key={id}>
                <Card>
                    <CardHeader   
                        
                        title={`${sliceTitle.toUpperCase()}.`}
                        subheader={`${sliceBody}`}
                    />
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            <Button size="small" color="primary">
                               
                                <Link to={`/post/${id}`}> Read More ...</Link>
                            </Button>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>            
        </>
    );
};

export default ArticleBody;