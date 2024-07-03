import React, { useState } from 'react';

import Thumbnail1 from '../images/blog1.jpg';
import Thumbnail2 from '../images/blog2.jpg';
import Thumbnail3 from '../images/blog3.jpg';
import Thumbnail4 from '../images/blog4.jpg';
import Postitem from './Postitem';

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
        thumbnail: Thumbnail2,
        category: 'science',
        title: 'This is the title of the very first page on this Blog page',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi veniam consequatur a eum, qui aliquam reprehenderit molestias, corporis vel, nam alias unde asperiores sed voluptate. Reprehenderit alias rem quisquam dignissimos!',
        authorID: 1
    },
    {
        id: '3',
        thumbnail: Thumbnail3,
        category: 'weather',
        title: 'This is the title of the very first page on this Blog page',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi veniam consequatur a eum, qui aliquam reprehenderit molestias, corporis vel, nam alias unde asperiores sed voluptate. Reprehenderit alias rem quisquam dignissimos!',
        authorID: 13
    },
    {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'farming',
        title: 'This is the title of the very first page on this Blog page',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi veniam consequatur a eum, qui aliquam reprehenderit molestias, corporis vel, nam alias unde asperiores sed voluptate. Reprehenderit alias rem quisquam dignissimos!',
        authorID: 11
    },
];

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS);

    return (
        <section className='posts'>
            <div className="container posts__container">
                {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (<Postitem
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