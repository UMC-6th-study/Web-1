import React from 'react';
import MovieList from '../components/MovieList';

const PopularPage = () => {
  return (
    <div>
      <h2>Popular Movies</h2>
      <MovieList category="popular" />
    </div>
  );
};

export default PopularPage;
