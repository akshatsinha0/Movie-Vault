// src/App.js
import React from 'react';
import './App.css'; 
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MovieSearch from './components/MovieSearch'; 
import TrendingRow from './components/TrendingRow';
import MovieDetails from './components/MovieDetails';
import TopRatedRow from './components/TopRatedRow';
import ActionMoviesRow from './components/ActionMoviesRow';


function App() {
  // For HeroSection, you can keep your featuredMovie if desired
  const featuredMovie = {
    title: 'Epic Blockbuster',
    overview: 'An epic adventure of a lifetime...',
    backdrop: 'https://image.tmdb.org/t/p/original/some-backdrop.jpg',
  };



  return (
    <div className="App">
      <Header />
      <HeroSection movie={featuredMovie} />

      <h1 style={{ marginTop: '2rem' }}>MovieVault</h1>
      
      <MovieSearch />

    
      <MovieDetails movie={null} />

      
      <TrendingRow />
      <TopRatedRow />
      <ActionMoviesRow />
     
    </div>
  );
}

export default App;
