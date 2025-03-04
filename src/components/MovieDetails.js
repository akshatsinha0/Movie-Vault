// src/components/MovieDetails.js
import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movie }) => {
  if (!movie) return <div className="movie-details-placeholder">Select a movie to see details</div>;
  
  return (
    <div className="movie-details">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="details-poster"
      />
      <div className="details-info">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p><strong>Rating:</strong> {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
