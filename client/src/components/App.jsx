import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList.jsx';
import SearchMovie from './SearchMovie.jsx';
import AddMovie from './AddMovie.jsx';
import dummyData from '../../../db/dummyData.js'


class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      movies: dummyData
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  // componentDidMount() {

  // }

  // getMovies() {

  // }

  handleSearch(title) {

    // function onlyUnique(value, index, self) { 
    //   return self.indexOf(value) === index;
    // }

    // console.log(['wsup', 'sup', 'wassup', 'sup'].filter(onlyUnique));

    if (title.length) {
      let newState = {
        movies: this.state.movies.filter(movie => movie.title.toUpperCase() === title.toUpperCase())
      };
      this.setState(newState);
    } else {
      let newState = {
        movies: dummyData
      }
      this.setState(newState);
    }

  }

  render() {
    return (
      <div>
        <h1>MovieList</h1>
        <div className="main-container">
          <SearchMovie movies={this.state.movies} handleSearch={this.handleSearch}/>
          <AddMovie />
          <MovieList movies={this.state.movies}/>
        </div>
      </div>
      
    );
  }
}

export default App;