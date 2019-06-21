import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Col, Row } from 'react-bootstrap';

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
     <div>
          {[0, 1, 2].map(value => (

              <Card className='cardWrapper'>
                <CardMedia
                  title='hello'

                  className={this.props.classes.media}

                  />

                <CardContent>
                  <Typography>
                    {this.props.title}
                  </Typography>
                  <div>
                    Year {this.props.year}
                  </div>
                  <div>
                    Rating {this.props.rating}
                  </div>
                </CardContent>
                </Card>

          ))}
          </div>
    )
  }

}

export default withStyles(jssStyles)(MovieCard);
