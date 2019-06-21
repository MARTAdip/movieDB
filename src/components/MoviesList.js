import React, {Component, Fragment} from 'react';
import MovieCard from './MovieCard'
import { API_KEY } from '../utils/api';
import axios from 'axios';
import { Container , Row } from 'react-bootstrap';
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
    const {title, movies } = this.props;
    console.log(this.state, 'state');

    return(
      <Fragment>

          {this.state.movies.map(movie => <MovieCard
            key={movie.id}
            title={movie.title}
            movies={movies}
            year={movie.release_date}
            rating={movie.vote_average}
            />)}
           {/* {this.state.movies.map(movie => <h1>{movie.title}</h1>)} */}
          movies

      </Fragment>
    );
  }


}

export default MoviesList;
