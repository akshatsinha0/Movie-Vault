// src/api/tmdb.js
export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
export const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN;
export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchMovies(query) {
  try {
    const response = await fetch(
      `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
}


export async function fetchTrendingMovies() {
  try {
    const response = await fetch(
      `${TMDB_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}&language=en-US`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch trending movies');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
}
