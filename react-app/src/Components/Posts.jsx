import React, { useState } from "react";

import Postitem from "./Postitem";
import { DUMMY_POSTS } from "../data";
import "../index.css";

const Posts = () => {
  const [posts] = useState(DUMMY_POSTS);

  return (
    <section className="post" id="section-under-grid">
      {posts.length > 0 ? (
        <div className="container posts__container">
          {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
            <Postitem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              description={desc}
              authorID={authorID}
            />
          ))}
        </div>
      ) : (
        <h2 className="center">No posts found</h2>
      )}
    </section>
  );
};

export default Posts;

/*import React , { useState } from 'react';

import Thumbnail1 from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog2.jpg'
import Thumbnail3 from '../images/blog3.jpg'
import Thumbnail4 from '../images/blog4.jpg'
import Postitem from './Postitem'

const DUMMY_POSTS = [
    {
        id: '1',
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'This is the title of the very first page on this Blog page',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi veniam consequatur a eum, qui aliquam reprehenderit molestias, corporis vel, nam alias unde asperiores sed voluptate. Reprehenderit alias rem quisquam dignissimos!',
        authorID: 3
    },
    {
        id: '2',
        thumbnail: Thumbnail1,
        category: 'science',
        title: 'This is the title of the very first page on this Blog page',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi veniam consequatur a eum, qui aliquam reprehenderit molestias, corporis vel, nam alias unde asperiores sed voluptate. Reprehenderit alias rem quisquam dignissimos!',
        authorID: 1

    },
    {
        id: '3',
        thumbnail: Thumbnail1,
        category: 'weather',
        title: 'This is the title of the very first page on this Blog page',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi veniam consequatur a eum, qui aliquam reprehenderit molestias, corporis vel, nam alias unde asperiores sed voluptate. Reprehenderit alias rem quisquam dignissimos!',
        authorID: 13
    },
    {
        id: '4',
        thumbnail: Thumbnail1,
        category: 'farming',
        title: 'This is the title of the very first page on this Blog page',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi veniam consequatur a eum, qui aliquam reprehenderit molestias, corporis vel, nam alias unde asperiores sed voluptate. Reprehenderit alias rem quisquam dignissimos!',
        authorID: 11
    },

]
const Posts = () => {
    const [posts, setPosts]= useState(DUMMY_POSTS)
  return (
    
    <section className='posts'>
        {
            posts.map((id,thumbnail,category,title,description,authorID) =>
            <Postitem key={id} postID={id} thumbnail={thumbnail} category={category} title={title}
            description={description} authorID={authorID} />)
        }
    </section>
  )
}

export default Posts*/
