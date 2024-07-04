import React, { useState } from 'react';
import axios from 'axios';

const BlogPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'This is the  Post Title !', content: 'This post is Deleted.' },
    // Add more posts as needed
  ]);

  // Function to delete a post by ID
  const deletePost = async (id) => {
    try {
      await axios.delete(`https://your-api-endpoint/posts/${id}`);
      const updatedPosts = posts.filter(post => post.id !== id);
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error deleting the post:', error);
    }
  };

  return (
    <div>
      <h1>Blog Page</h1>
      {posts.map(post => (
        <div key={post.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
