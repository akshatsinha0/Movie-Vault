// src/components/Featured.js
import React from 'react';
import './Featured.css';

function Featured({ movie }) {
  // Example fallback data if no prop is passed
  const fallbackMovie = {
    title: 'Featured Movie',
    overview: 'A thrilling adventure awaits...',
    backdrop: 'https://image.tmdb.org/t/p/original/your-backdrop-path.jpg',
  };

  const currentMovie = movie || fallbackMovie;

  return (
    <section
      className="featured"
      style={{
        backgroundImage: `url(${currentMovie.backdrop})`,
      }}
    >
      <div className="featured__overlay"></div>
      <div className="featured__content">
        <h2 className="featured__title">{currentMovie.title}</h2>
        <p className="featured__description">{currentMovie.overview}</p>
        <div className="featured__buttons">
          <button className="btn">Play</button>
          <button className="btn btn--secondary">My List</button>
        </div>
      </div>
    </section>
  );
}

export default Featured;
