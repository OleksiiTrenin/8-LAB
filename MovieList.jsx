import React, { useRef, useEffect } from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ movies = [], searchTerm = '' }) => {
  const scrollRef = useRef(null);


  const filteredMovies = movies.filter((movie) => {
    
    if (!movie || !movie.title) return false;
    
    const search = typeof searchTerm === 'string' ? searchTerm.toLowerCase() : '';
    return movie.title.toLowerCase().includes(search);
  });
