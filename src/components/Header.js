// src/components/Header.js
import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [searchActive, setSearchActive] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Get current page from URL hash or path
    const path = window.location.hash.substring(1) || window.location.pathname.substring(1) || "home";
    setCurrentPage(path);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSearch = () => {
    setSearchActive(!searchActive);
    if (!searchActive) {
      // Focus search input when activated
      setTimeout(() => {
        const searchInput = document.getElementById("header-search");
        if (searchInput) searchInput.focus();
      }, 100);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`header ${scrollPosition > 50 ? "header-scrolled" : ""} ${searchActive ? "search-active" : ""}`}
      role="banner"
    >
      <div className="header__backdrop"></div>
      <div className="header__content">
        <div className="header__left">
          <img 
            src={logo} 
            alt="MovieVault Logo" 
            className="header__logo" 
            onClick={() => setCurrentPage("home")}
          />
          
          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? "active" : ""}`} 
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`header__nav ${mobileMenuOpen ? "mobile-active" : ""}`}>
            <ul>
              <li className={currentPage === "home" ? "active" : ""}>
                <a href="#home">
                  <span className="nav-text">Home</span>
                  <span className="nav-indicator"></span>
                </a>
              </li>
              <li className={`dropdown-parent ${currentPage.includes("tvshows") ? "active" : ""}`}>
                <a href="#tvshows">
                  <span className="nav-text">TV Shows</span>
                  <span className="nav-indicator"></span>
                  <span className="dropdown-arrow"></span>
                </a>
                <ul className="dropdown-menu">
                  <li className={currentPage === "popular-tv" ? "active" : ""}>
                    <a href="#popular-tv">Popular</a>
                  </li>
                  <li className={currentPage === "latest-tv" ? "active" : ""}>
                    <a href="#latest-tv">Latest</a>
                  </li>
                  <li className={currentPage === "genres-tv" ? "active" : ""}>
                    <a href="#genres-tv">Genres</a>
                  </li>
                </ul>
              </li>
              <li className={`dropdown-parent ${currentPage.includes("movies") ? "active" : ""}`}>
                <a href="#movies">
                  <span className="nav-text">Movies</span>
                  <span className="nav-indicator"></span>
                  <span className="dropdown-arrow"></span>
                </a>
                <ul className="dropdown-menu">
                  <li className={currentPage === "popular-movies" ? "active" : ""}>
                    <a href="#popular-movies">Popular</a>
                  </li>
                  <li className={currentPage === "latest-movies" ? "active" : ""}>
                    <a href="#latest-movies">Latest</a>
                  </li>
                </ul>
              </li>
              <li className={currentPage === "new" ? "active" : ""}>
                <a href="#new">
                  <span className="nav-text">New &amp; Popular</span>
                  <span className="nav-indicator"></span>
                </a>
              </li>
              <li className={currentPage === "mylist" ? "active" : ""}>
                <a href="#mylist">
                  <span className="nav-text">My List</span>
                  <span className="nav-indicator"></span>
                </a>
              </li>
              <li className={currentPage === "trending" ? "active" : ""}>
                <a href="#trending">
                  <span className="nav-text">Trending</span>
                  <span className="nav-indicator"></span>
                </a>
              </li>
              <li className={currentPage === "favorites" ? "active" : ""}>
                <a href="#favorites">
                  <span className="nav-text">Favorites</span>
                  <span className="nav-indicator"></span>
                </a>
              </li>
              <li className={currentPage === "about" ? "active" : ""}>
                <a href="#about">
                  <span className="nav-text">About</span>
                  <span className="nav-indicator"></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header__right">
          <div className={`search-container ${searchActive ? "active" : ""}`}>
            <button 
              className="search-toggle" 
              onClick={toggleSearch}
              aria-label="Toggle search"
            >
              <i className="fa fa-search"></i>
            </button>
            <div className="search-input-wrapper">
              <input 
                type="text" 
                id="header-search" 
                placeholder="Search for movies, shows..." 
                aria-label="Search for content"
              />
              <button className="search-close" onClick={toggleSearch}>
                <i className="fa fa-times"></i>
              </button>
            </div>
          </div>
          
          <div className="notifications">
            <button className="notification-button" aria-label="Notifications">
              <i className="fa fa-bell"></i>
              <span className="notification-badge">2</span>
            </button>
          </div>
          
          <div className="user-profile">
            <img 
              src={avatar} 
              alt="User Avatar" 
              className="header__avatar" 
              // aria-haspopup="true"
            />
            <div className="user-menu">
              <div className="user-menu-header">
                <span className="user-name">User Profile</span>
                <span className="user-email">akshatsinhasramhardy@gmail.com</span>
              </div>
              <ul>
                <li><a href="#profile">Profile</a></li>
                <li><a href="#settings">Settings</a></li>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#logout">Sign Out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
