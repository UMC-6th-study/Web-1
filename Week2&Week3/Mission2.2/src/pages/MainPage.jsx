import React from 'react';
import MovieList from '../components/MovieList';
import Banner from '../components/Banner';
import SearchSection from '../components/SearchSection';

const MainPage = () => {
  return (
    <div>
      <Banner />
      <SearchSection />
      <MovieList category="popular" />
    </div>
  );
};

export default MainPage;
