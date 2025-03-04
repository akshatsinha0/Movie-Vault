// src/components/MovieSearch.js
import React, { useState } from 'react';
import { fetchMovies } from '../api/tmdb';
import './MovieSearch.css';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fallbackPoster = 'https://via.placeholder.com/300x450?text=No+Image';

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return; // Don't search if the query is empty
    setLoading(true);
    setError(null);
    try {
      const results = await fetchMovies(query);
      setMovies(results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="movie-search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="search-results">
        {movies.map((movie) => {
          const posterUrl = movie.poster_path 
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : fallbackPoster;
          return (
            <div key={movie.id} className="movie-item">
              <img
                src={posterUrl}
                alt={movie.title || 'Movie Poster'}
              />
              <h3>{movie.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieSearch;
