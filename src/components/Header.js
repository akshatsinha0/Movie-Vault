// src/components/Header.js
import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="MovieVault Logo" className="header__logo" />
        <nav className="header__nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>


            <li className="dropdown-parent">
              <a href="#tvshows">TV Shows</a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#popular-tv">Popular</a>
                </li>
                <li>
                  <a href="#latest-tv">Latest</a>
                </li>
                <li>
                  <a href="#genres-tv">Genres</a>
                </li>
              </ul>
            </li>

            <li className="dropdown-parent">
              <a href="#movies">Movies</a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#popular-movies">Popular</a>
                </li>
                <li>
                  <a href="#latest-movies">Latest</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#new">New &amp; Popular</a>
            </li>
            <li>
              <a href="#mylist">My List</a>
            </li>
            <li>
              <a href="#trending">Trending</a>
            </li>
            <li>
              <a href="#favorites">Favorites</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header__right">
        <a href="#search" className="icon">
          🔍
        </a>
        <a href="#profile" className="icon">
          👤
        </a>
      </div>
    </header>
  );
}

export default Header;
