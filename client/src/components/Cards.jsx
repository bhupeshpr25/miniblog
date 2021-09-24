import React from 'react';
import Post from './Post';

function Cards({ posts }) {
  return (
    <div className="cards">
      {posts && posts.map(p => <Post post={p} key={posts._id} />)}
    </div>
  );
}

export default Cards;
