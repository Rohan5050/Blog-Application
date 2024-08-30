import React, { useState } from "react";

const DeletePost = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "This is the  Post Title !",
      content: "This post is Deleted.",
    },
    // Add more posts as needed
  ]);

  return (
    <div>
      <h1>Blog Page</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
        >
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default DeletePost;
