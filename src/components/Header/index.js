import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="page-header">
      <div id="page-row" className="row">
        <div className="col-sm-12 col-md-8">
          <h1 id="avenger-title">Avengers, Assemble!</h1>
          <p>
            Click an Avenger to add them to your team. But don't click them
            twice!
          </p>
        </div>
        <div id="scoreBoard" className="col-sm-12 col-md-4">
          <h2 id="currentScore">Current Score: {props.currentScore}</h2>
          <h2 id="highestScore">
            Highest Score: {localStorage.getItem("highestScore")}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
