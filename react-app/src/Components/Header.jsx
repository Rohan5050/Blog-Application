import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/avatar3.jpg';
import { FaBars } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className='nav_logo'>
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        <ul className='nav_menu'>
          <li><Link to="/profile">Achievements</Link></li>
          <li><Link to="/create">Create Post</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
        <button className='nav_toggle-btn'>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Header;


/*import React from 'react'
import {Link} from "react-router-dom"
import Logo from '../images/avatar3.jpg'
import { FaBars } from "react-icons/fa6";
import {AiOutlineClose} from "react-icons/ai"

const Header = () => {
  return (
    <nav>
        <div className="container nav_container">
            <Link to="/" className='nav_logo'>
              <img src={Logo} alt="Navbar Logo" />
            </Link>
            <ul className='nav_menu'>
                <li><Link to="/profile"></Link>Achievements</li>
                <li><Link to="/create"></Link>Create Post</li>
                <li><Link to="/authors"></Link>Authors</li>
                <li><Link to="/logout"></Link>Logout</li>
            </ul>
            <button className='nav_toggle-btn'>
                 <AiOutlineClose/>
            </button>
        </div>
    </nav>
  )
}

export default Header*/