import React from 'react';

const MovieListItem = (props) => {
  return (
    <li>
      <span>{props.movie.title}</span>
    </li>
  );
};

export default MovieListItem;