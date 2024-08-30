import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/thumbnail.jpg";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import "../index.css";

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleToggle = () => {
    setIsDarkTheme((prevState) => !prevState);
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800);

  const closeNavHandler = () => {
    if (window.innerWidth > 800) {
      setIsNavShowing(true);
    } else {
      setIsNavShowing(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", closeNavHandler);
    return () => window.removeEventListener("resize", closeNavHandler);
  }, []);

  const toggleNavHandler = () => {
    setIsNavShowing((prevState) => !prevState);
  };

  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="nav_logo">
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        {isNavShowing && (
          <ul className="nav_menu">
            <li>
              <Link
                id="nav-style"
                to="/profile/sdfsdf"
                onClick={closeNavHandler}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link id="nav-style" to="/create" onClick={closeNavHandler}>
                Create Post
              </Link>
            </li>
            <li>
              <Link id="nav-style" to="/authors" onClick={closeNavHandler}>
                Authors
              </Link>
            </li>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="theme-toggle"
                className="toggle-switch-checkbox"
                checked={isDarkTheme}
                onChange={handleToggle}
              />
              <label className="toggle-switch-label" htmlFor="theme-toggle">
                <span className="toggle-switch-inner" />
                <span className="toggle-switch-switch" />
              </label>
            </div>
            {/*
          <button className='btn-style' onClick={handleToggle}>
          {isDarkTheme ? 'Dark Theme' : 'Light Theme'}
          </button> */}
          </ul>
        )}
        <button
          className="nav_toggle-btn"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
