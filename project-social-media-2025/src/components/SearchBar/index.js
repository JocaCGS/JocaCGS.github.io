import React, { useState } from 'react';
import './style.css';

export default function ButtonProfile() {
    return(
        <div className='searchdiv'>
            <button className='buttonsearch'>O</button>
            <input className='searchbox' placeholder='Search'></input>
        </div>
    )
}