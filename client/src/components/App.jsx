import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList.jsx';
import SearchMovie from './SearchMovie.jsx';
import AddMovie from './AddMovie.jsx';


class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ]
    };
  }

  // componentDidMount() {

  // }

  // getMovies() {

  // }

  render() {
    return (
      <div>
        <h1>MovieList</h1>
        <div className="main-container">
          <SearchMovie />
          <AddMovie />
          <MovieList movies={this.state.movies}/>
        </div>
      </div>
      
    );
  }
}

export default App;