
import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movie, onClose }) => {
  if (!movie) return null; 


  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <div className="movie-details-modal">
      <div className="movie-details-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img
          src={posterUrl}
          alt={movie.title || movie.name}
          className="details-poster"
        />
        <div className="details-info">
          <h2>{movie.title || movie.name}</h2>
          <p>{movie.overview}</p>
          <p>
            <strong>Rating:</strong>{' '}
            {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
