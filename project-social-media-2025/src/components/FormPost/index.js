import React, { useState } from 'react';
import './style.css';

export default function FormPost() {
    return(
        <div className='postingdiv'>
            <h1>Feed</h1>
            <textarea className='newpost' placeholder='What are you thinking?'>
                
            </textarea>
            
            <div className="buttonarea">
                <div className="buttonarealeft">
                    <button className="create-post-button">&</button>
                </div>
                <div className="buttonarearight">
                    <button className="create-post-button">+</button>
                </div>
            </div>

        </div>
    )
}
