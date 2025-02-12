import React, { useEffect } from "react";
import "./Noob.css";

function Nica() {
  useEffect(() => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  }, []); // Runs when Nica is mounted

  return (
    <div className="fullscreen">
      <h1>Nica</h1>
    </div>
  );
}

export default Nica;
