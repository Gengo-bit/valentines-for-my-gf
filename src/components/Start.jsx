import React from 'react'
import "./Noob.css";

function Start() {
      // Function to slowly scroll to the bottom
  const slowScrollToBottom = () => {
    const scrollStep = 6; // Pixels per step (lower value = slower scroll)
    const delay = 10; // Milliseconds per step (higher value = slower scroll)

    const scrollInterval = setInterval(() => {
      const currentScroll = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      if (currentScroll < maxScroll) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval); // Stop scrolling when bottom is reached
      }
    }, delay);
  };
  return (
    <div className="fullscreen">
      <button className="scroll-btn" onClick={slowScrollToBottom}>Start</button>
    </div>
  )
}

export default Start
