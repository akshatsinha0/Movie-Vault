// src/components/MovieList.js
import React from 'react';
import './MovieList.css';

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div className="movie-list">
      <h2>Latest Movies</h2>
      <div className="movie-cards">
        {movies &&
          movies.map((movie) => (
            <div key={movie.id} className="movie-card" onClick={() => onSelectMovie(movie)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <h3 className="movie-title">{movie.title}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieList;
