import React, { Profiler } from 'react';
import './style.css'; // importando o CSS local da página (opcional)
import FormPost from  '../../components/FormPost'
import ButtonHome from  '../../components/ButtonHome'
import ButtonNotifications from  '../../components/ButtonNotifications'
import ButtonMessages from  '../../components/ButtonMessages'
import ButtonProfile from  '../../components/ButtonProfile'
import ButtonMore from  '../../components/ButtonMore'
import SearchBar from  '../../components/SearchBar'
import Trending from  '../../components/Trending'

function Feed() {
  return (
      <div className="wholepage">
        <div className='configs-div'>
          <div className='configs-content'>
            ICONE LEGAL
            <div>
              <ButtonHome/>
            </div>
            <div>
              <ButtonNotifications/> 
            </div>
            <div>
              <ButtonMessages/> 
            </div>
            <div>
              <ButtonProfile/> 
            </div>
            <div>
              <ButtonMore/> 
            </div>
          </div>
        </div>
        <div className='feed-div'>
          <div className='feed-content1'>
            <FormPost/>
          </div>
        </div>
        <div className='trending-div'>
          <div className='trending-content'>
              <SearchBar/> 
              <Trending/>
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
