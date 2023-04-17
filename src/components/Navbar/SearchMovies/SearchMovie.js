import React, { useState } from "react";
import MovieCard from "./MovieCard";
import './searchMovie.css';
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=8581312a";

const SearchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  // useEffect(() => {
  //   searchMovies("Harry Potter");
  // }, []);

  return (
    
    <div className="cont">
      {/* <h1>Search</h1> */}
      <div className="search">
        <input
          type="text"
          placehoder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={(e) => searchMovies(searchTerm)} />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies Found</h2>
        </div>
      )}
    </div>
    
  );
};


export default SearchMovie;
