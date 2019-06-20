import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
//import { getMovieDB } from './utils/api';

const jssStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
});


class MovieCard extends Component{



  render(){
    return(
      <Grid container className={this.props.classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[0, 1, 2].map(value => (
            <Grid key={value} item>
              <Card className={this.props.classes.paper} >
                <CardContent>
                  hello
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
