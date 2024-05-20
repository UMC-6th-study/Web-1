import React from 'react';
import MovieList from '../components/MovieList';

const UpComingPage = () => {
  return (
    <div>
      <h2>Upcoming Movies</h2>
      <MovieList category="upcoming" />
    </div>
  );
};

export default UpComingPage;
