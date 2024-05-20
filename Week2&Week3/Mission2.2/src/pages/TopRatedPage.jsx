import React from 'react';
import MovieList from '../components/MovieList';

const TopRatedPage = () => {
  return (
    <div>
      <h2>Top Rated Movies</h2>
      <MovieList category="top_rated" />
    </div>
  );
};

export default TopRatedPage;
