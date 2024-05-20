import axios from 'axios';

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3';

export const getMoviesByCategory = async (category) => {
  try {
    const response = await axios.get(`${baseUrl}/movie/${category}`, {
      params: {
        api_key: apiKey,
        language: 'ko-KR',
        region: 'KR',
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
