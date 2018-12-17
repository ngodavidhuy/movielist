import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = (props) => {

  const movies = props.movies.map( movie => (
    <MovieListItem movie={movie}/>
  ));

  return (
    <ul className="main-list">
      {movies.length ? movies : "no movie by that name found"}
    </ul>
  );
}

export default MovieList;