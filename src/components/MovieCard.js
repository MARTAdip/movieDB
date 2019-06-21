import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { withStyles } from '@material-ui/core/styles';
//import { getMovieDB } from './utils/api';
import Typography from '@material-ui/core/Typography';

const jssStyles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  control: {
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});


class MovieCard extends Component{




  render(){
    console.log(this.props);

    return(
     <Grid container className={this.props.classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[0, 1, 2].map(value => (
            <Grid key={value} item>
              <Card className={this.props.classes.card}>
                <CardMedia
                  title='hello'

                  className={this.props.classes.media}

                  />

                <CardContent>
                  <Typography>
                    {this.props.movies.title}
                  </Typography>
                  <div>
                    YEAR
                  </div>
                  <div>
                    RATING
                  </div>
                </CardContent>
                </Card>
            </Grid>
          ))}
        </Grid>
        </Grid>
        </Grid>

    )
  }

}

export default withStyles(jssStyles)(MovieCard);
