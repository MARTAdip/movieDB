import React, {Component, Fragment} from 'react';
import MovieCard from './MovieCard'
import { API_KEY } from '../utils/api';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

class MoviesList extends Component {

  state={
    movies: []
  }

  async componentDidMount(){
    const { data: movies } = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c458ee0f7409d5a23473b3cf66bcc8d0')
      this.setState({ movies: movies.results  })
      console.log(movies);

  }

  render(){
  const { movies } = this.state;
    console.log(this.state, 'state');

    return(
      <Fragment>
        <Grid container  spacing={2}>
        <Grid item xs={12}>
          {movies.map(movie => <MovieCard
            key={movie.id}

            movies={movies}
            />)}
          {/* {movies.map(movie => <h1>{movies.title}</h1>)} */}
          movies
        </Grid>
      </Grid>
      </Fragment>
    );
  }


}

export default MoviesList;
