import React, { useState } from 'react';
import MovieList from './components/MovieList';
import movies from './data/movies'; 
import './App.css';
function App() {
  const [searchTerm, setSearchTerm] = useState(''); 
  return (
    <div className="app-container">
      <header className="app-header">
      
          <input
            type="text"
            placeholder="Пошук..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <a href="#">Увійти</a>
        </nav>
      </header>
      <MovieList movies={movies || []} searchTerm={searchTerm || ''} />
    </div>
  );
}

export default App;
