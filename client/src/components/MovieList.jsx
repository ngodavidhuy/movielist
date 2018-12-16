import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = (props) => {

  const movies = props.movies.map( movie => (
    <MovieListItem movie={movie}/>
  ));

  return (
    <ul className="main-list">
      {movies}
    </ul>
  );
}

export default MovieList;