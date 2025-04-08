// src/components/MovieSearch.js
import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../api/tmdb';
import './MovieSearch.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Skeleton from '@mui/material/Skeleton';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const fallbackPoster = 'https://via.placeholder.com/300x450?text=No+Image';

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.trim()) {
        performSearch();
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [query]);

  const performSearch = async () => {
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

  const handleClear = () => {
    setQuery('');
    setMovies([]);
  };

  return (
    <div className="movie-search-container">
      <div className={`search-bar ${isFocused ? 'focused' : ''}`}>
        <div className="search-icon">
          <SearchIcon />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search movies, TV shows..."
          aria-label="Search movies"
        />
        {query && (
          <button className="clear-button" onClick={handleClear} aria-label="Clear search">
            <CloseIcon />
          </button>
        )}
      </div>

      {error && (
        <div className="error-message">
          <div className="error-icon">!</div>
          <p>{error}</p>
          <button onClick={performSearch} className="retry-button">
            Retry
          </button>
        </div>
      )}

      <div className="search-results-grid">
        {loading ? (
          Array(6).fill().map((_, index) => (
            <div key={index} className="movie-skeleton">
              <Skeleton variant="rectangular" width="100%" height={300} />
              <Skeleton width="80%" height={24} style={{ marginTop: '10px' }} />
            </div>
          ))
        ) : (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <div className="poster-container">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                      : fallbackPoster
                  }
                  alt={movie.title}
                  loading="lazy"
                />
                <div className="movie-overlay">
                  <p className="movie-rating">
                    ⭐ {movie.vote_average?.toFixed(1) || 'N/A'}
                  </p>
                  <p className="movie-overview">
                    {movie.overview?.substring(0, 150) + '...' || 'No description available'}
                  </p>
                  <p className="movie-release">
                    Released: {movie.release_date || 'Unknown'}
                  </p>
                </div>
              </div>
              <h3 className="movie-title">{movie.title}</h3>
            </div>
          ))
        )}
      </div>

      {!loading && movies.length === 0 && query && !error && (
        <div className="no-results">
          <h2>No results found for "{query}"</h2>
          <p>Try different keywords or check the spelling</p>
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
