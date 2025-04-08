// src/components/TrendingRow.js
import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../api/tmdb';
import Row from './Row';

function TrendingRow() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => { 
    async function getData() {
      try {
        const trending = await fetchTrendingMovies();
        setMovies(trending);
      } catch (err) {
        setError(err.message);
      }
    }
    getData();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return <Row title="Trending Now" movies={movies} />;
}

export default TrendingRow;
