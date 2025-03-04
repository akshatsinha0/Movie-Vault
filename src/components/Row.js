// src/components/Row.js
import React from 'react';
import './Row.css';

function Row({ title, movies = [], onSelectMovie }) {
  // Fallback image if no poster path is provided
  const fallbackPoster = 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => {
          // Handle movie or TV show titles
          const displayTitle = movie.title || movie.name || movie.original_name;
          // Prepend TMDb base URL for posters
          const posterPath = movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : fallbackPoster;
          // Format rating if present, else "N/A"
          const rating = movie.vote_average
            ? movie.vote_average.toFixed(1)
            : 'N/A';

          return (
            <div
              key={movie.id}
              className="row__posterContainer"
              // Only show pointer & onClick if onSelectMovie is provided
              style={{ cursor: onSelectMovie ? 'pointer' : 'auto' }}
              onClick={() => onSelectMovie && onSelectMovie(movie)}
            >
              <img
                className="row__poster"
                src={posterPath}
                alt={displayTitle}
              />
              <div className="row__posterOverlay">
                <p className="row__overlayTitle">{displayTitle}</p>
                <p className="row__overlayRating">Rating: {rating}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
