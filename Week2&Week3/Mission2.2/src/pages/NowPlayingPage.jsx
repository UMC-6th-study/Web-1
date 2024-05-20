import React from 'react';
import MovieList from '../components/MovieList';

const NowPlayingPage = () => {
  return (
    <div>
      <h2>Now Playing Movies</h2>
      <MovieList category="now_playing" />
    </div>
  );
};

export default NowPlayingPage;
