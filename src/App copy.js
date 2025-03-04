// src/App.js
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

function App() {
  // Dummy data for now; you'll fetch real data later
  const [movies, setMovies] = useState([
    { id: 1, title: 'Movie One', overview: 'Overview of movie one.' },
    { id: 2, title: 'Movie Two', overview: 'Overview of movie two.' },
  ]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="App">
      <h1>MovieVault</h1>
      <MovieList movies={movies} />
      <MovieDetails movie={selectedMovie} />
    </div>
  );
}

export default App;
