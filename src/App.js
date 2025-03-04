// src/App.js
import React, { useState } from 'react';
import './App.css'; 
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MovieSearch from './components/MovieSearch'; 
import TrendingRow from './components/TrendingRow';
import MovieDetails from './components/MovieDetails';
import TopRatedRow from './components/TopRatedRow';
import ActionMoviesRow from './components/ActionMoviesRow';

function App() {
  const featuredMovie = {
    title: 'Epic Blockbuster',
    overview: 'An epic adventure of a lifetime...',
    backdrop: 'https://image.tmdb.org/t/p/original/some-backdrop.jpg',
  };

  // State for selected movie details
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Handler to update the selected movie when a poster is clicked
  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="App">
      <Header />
      <HeroSection movie={featuredMovie} />

      <h1 style={{ marginTop: '2rem' }}>MovieVault</h1>
      
      <MovieSearch />

    

      {/* Rows that fetch data on their own (TrendingRow, TopRatedRow, ActionMoviesRow) */}
      <TrendingRow />
      <TopRatedRow />
      <ActionMoviesRow />

      

      {/* Conditionally render details if a movie is selected */}
      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default App;
