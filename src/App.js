import React, {Component} from 'react';
import './App.css';
import MoviesList from './components/MoviesList';
import Header from './components/Header';
class App extends Component {


  render(){
    return (
      <div className="App">
        <Header />
        <MoviesList />

      </div>
    );
  }
}

export default App;
