import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="nav__items">
        <Link to="/" className="nav__item">
          Home
        </Link>
        <Link to="/searchmovie">
          <i className="search__icon fa-solid fa-magnifying-glass"></i>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
