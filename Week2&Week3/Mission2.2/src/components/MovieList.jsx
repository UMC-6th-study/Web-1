import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { getMoviesByCategory } from '../api';
import MovieCard from './MovieCard';
import LoadingSpinner from './LoadingSpinner';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #1c1c1c;
`;

const MovieList = ({ category }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const fetchedMovies = await getMoviesByCategory(category);
      setMovies(fetchedMovies);
      setLoading(false);
    };
    
    fetchMovies();
  }, [category]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <List>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </List>
  );
};

export default MovieList;
