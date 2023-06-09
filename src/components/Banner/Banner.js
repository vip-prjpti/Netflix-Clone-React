import axios from "../API/axios";
import React, { useEffect, useState } from "react";
import requests from "../API/requests";
import './banner.css';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
//   console.log(movie);

  function truncate(str,n){
    return str?.length>n ? str.substr(0,n-1) + "..." : str;
  }

  return (
    <header className="banner" 
    style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
    }}>
      <div className="banner--fadeTop"></div>
    <div className="banner__content">
    <h1 className="banner__title">
        {movie?.title || movie?.name || movie?.original_name} 
    </h1>
      

        <h1 className="banner__description">
            {truncate(movie?.overview,150)}
        </h1>
      <div className="banner__buttons">
        <button className="banner__button banner__button-play"><i className="banner__button-icon fa-solid fa-play"></i>Play</button>
        <button className="banner__button banner__button-info"><i className="banner__button-icon fa-solid fa-circle-info"></i>More info</button>
      </div>
        
    </div>
    <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
