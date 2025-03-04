// src/components/TopRatedRow.js
import React, { useEffect, useState } from 'react';
import Row from './Row';
import requests from '../api/requests';

function TopRatedRow() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.themoviedb.org/3${requests.fetchTopRated}`);
        if (!response.ok) {
          throw new Error('Failed to fetch top-rated movies');
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchData();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return <Row title="Top Rated" movies={movies} />;
}

export default TopRatedRow;
