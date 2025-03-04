// src/components/Row.js
import React from 'react';
import './Row.css';

function Row({ title, movies }) {
  // Fallback image if no poster path is provided
  const fallbackPoster = 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => {
          // Handle movie or TV show titles
          const displayTitle = movie.title || movie.name || movie.original_name;

          // For TMDb posters, prepend the base URL. If poster_path is missing, use the fallback.
          const posterPath = movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : fallbackPoster;

          return (
            <div className="row__posterContainer" key={movie.id}>
              <img
                className="row__poster"
                src={posterPath}
                alt={displayTitle}
              />
              <div className="row__posterOverlay">
                <p className="row__overlayTitle">{displayTitle}</p>
                {movie.vote_average && (
                  <p className="row__overlayRating">
                    Rating: {movie.vote_average.toFixed(1)}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
