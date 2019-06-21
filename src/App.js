import React, {Component, Fragment} from 'react';
import MoviesList from './components/MoviesList';
import Header from './components/Header';
import YearRangeSlider from './components/YearRangeSlider';
import RatingRangeSlider from './components/RatingRangeSlider';
import RuntimeRangeSlider from './components/RuntimeRangeSlider';
import SearchButton from './components/SearchButton';
import { Col } from 'react-bootstrap';
import axios from 'axios';

class App extends Component {
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
    return (
      <Fragment>
      <Header />
      <div className="container">
      {/* <Col xs={12} sm={12} md={6} lg={6}>  */}

        <YearRangeSlider className="rangeSlider"/>
        <RatingRangeSlider />
        <RuntimeRangeSlider />
        <SearchButton />
      <div className="gridElement">

      <MoviesList className="movieContainer" title={movies.title}/>
</div>

      </div>
      </Fragment>
    );
  }
}

export default App;
