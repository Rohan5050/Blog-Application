import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar13.jpg'

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/sdssdf`}>
      <div className="post_author-avatar">
        <img src={Avatar} alt="" />
      </div>
      <div className="post_author-details">
        <h5>By: Rohan Vohra</h5>
        <small>Just Now</small>
      </div>
    </Link>
    
  )
}

export default PostAuthor