import React, {Component, Fragment} from 'react';
import MoviesList from './components/MoviesList';
import Header from './components/Header';
import YearRangeSlider from './components/YearRangeSlider';
import RatingRangeSlider from './components/RatingRangeSlider';
import RuntimeRangeSlider from './components/RuntimeRangeSlider';
import { Col } from 'react-bootstrap';

class App extends Component {


  render(){
    return (
      <Fragment>
      <Header />
      <div className="container">
      {/* <Col xs={12} sm={12} md={6} lg={6}>  */}

        <YearRangeSlider className="rangeSlider"/>
        <RatingRangeSlider />
        <RuntimeRangeSlider />
      <div className="gridElement">

      <MoviesList className="movieContainer" />
</div>

      </div>
      </Fragment>
    );
  }
}

export default App;
