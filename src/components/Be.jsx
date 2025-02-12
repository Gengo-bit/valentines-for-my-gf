import React, { useEffect } from 'react'
import './Noob.css';

function Noob() {
      useEffect(() => {
          const c = setTimeout(() => {
            document.body.classList.remove("not-loaded");
            clearTimeout(c);
          }, 1000);
        }, []); // Runs when Flower is mounted
  return (
    <div  className='fullscreen'>
      <h1>Be</h1>
    </div>
  )
}

export default Noob
