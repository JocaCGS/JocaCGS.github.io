import React from 'react';
import './style.css'; // importando o CSS local da página (opcional)

function Feed() {
  return (
      <div className="feed-container">
        <div className='feed-configs'></div>
        <div className='feed-posts'></div>
        <div className='feed-trending'></div>
    </div>
  );
}

export default Feed;
