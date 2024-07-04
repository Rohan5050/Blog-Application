import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className='footer_categories'>
        <li><Link to="posts/categories/:category/:Agriculture">Agriculture</Link></li>
        <li><Link to="posts/categories/:category/:Business">Business</Link></li>
        <li><Link to="posts/categories/:category/:Education">Education</Link></li>
        <li><Link to="posts/categories/:category/:Entertainment">Entertainment</Link></li>
        <li><Link to="posts/categories/:category/:Art">Art</Link></li>
        <li><Link to="posts/categories/:category/:Investment">Investment</Link></li>
        <li><Link to="posts/categories/:category/:Uncategorized">Uncategorized</Link></li>
        <li><Link to="posts/categories/:category/:Weather">Weather</Link></li>
      </ul>
      <div className="footer_copyright">
        <small>All Rights Reserved &copy; Copyright, Rohan Vohra.</small>
      </div>
    </footer>
)}

export default Footer