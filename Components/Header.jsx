import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/thumbnail.jpg';
import { FaBars } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';
import toggleTheme from '../darkMode';

const Header = () => {

  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800);

  const closeNavHandler = () => {
    if (window.innerWidth > 800) {
      setIsNavShowing(true);
    } else {
      setIsNavShowing(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', closeNavHandler);
    return () => window.removeEventListener('resize', closeNavHandler);
  }, []);

  const toggleNavHandler = () => {
    setIsNavShowing(prevState => !prevState);
  };

  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className='nav_logo'>
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        {isNavShowing && <ul className='nav_menu'>
          <li><Link to="/profile/sdfsdf"onClick={closeNavHandler}>Rohan Vohra</Link></li>
          <li><Link to="/create"onClick={closeNavHandler}>Create Post</Link></li>
          <li><Link to="/authors" onClick={closeNavHandler}>Authors</Link></li>
          < a href='#' className='btn' onClick={() => toggleTheme()}>
           Toogle Mode
          </a>
        </ul> }
        <button className='nav_toggle-btn'  onClick={() => setIsNavShowing(!isNavShowing)}>
          {isNavShowing ? <AiOutlineClose/> : <FaBars/>}
        </button>
      </div>
    </nav>
  );
};

export default Header;
