import React, { useEffect, useState } from "react";
import axios from "../API/axios";
import "./row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_URL = "https://image.tmdb.org/t/p/original/";



const Row = (props) => {
  const { title, fetchUrl, isLargeRow } = props;

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

 
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || " ")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <div>
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_URL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
            <p className="movie__votes">{(movie.vote_average).toFixed(1)}</p>
            <p>{movie.title}</p>
            </div>
        ))}
      </div>

      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}></Youtube>}
    </div>
    </>
  );
};

export default Row;
