import React from 'react';
import './style.css'; // importando o CSS local da página (opcional)

function Feed() {
  return (
      <div className="wholepage">
        <div className='configs-div'>
          <div className='configs-content'>
            configs
          </div>
        </div>
        <div className='feed-div'>
          <div className='feed-content1'>
            <div className='postingdiv'>
              <h1>Feed</h1>
              <textarea className='newpost' placeholder='What are you thinking?'>
                
              </textarea>
              <button className='create-post-button'>
                + 
              </button>
            </div>
          </div>
        </div>
        <div className='trending-div'>
          <div className='trending-content'>
            trending
          </div>
        </div>
    </div>
  );
}

const hardcodedprofile = {
  firstName: "Walter",
  lastName: "White",
  age: 52,
  id: 1
}

export default Feed;
