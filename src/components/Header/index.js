import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <h1>Avengers, Assemble!</h1>
          <p>
            Click an Avenger to add them to your team. But don't click them
            twice!
          </p>
        </div>
        <div id="scoreBoard" className="col-sm-12 col-md-4">
          <h2 id="currentScore">Current Score: </h2>
          <h2 id="highestScore">Highest Score: </h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
