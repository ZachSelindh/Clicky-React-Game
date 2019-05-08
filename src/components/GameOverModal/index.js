import React from "react";
import "./style.css";

function GameOverModal(props) {
  return (
    <div className="col-sm-12 col-md-8">
      <div id="gameover-modal" className="modal">
        <h1 id="gameover-modal-title"> Defeat </h1>
        <p className="gameover-modal-text"> Game Over. </p>
        <br />
        <img alt="Thanos" src="../assets/images/snap.gif" height="250px" />
        <br />
        <br />
        <p className="gameover-modal-text">
          Thanos has succeeded. The Avengers are snapped out of existance.
        </p>
        <button
          id="gameover-button"
          className="btn btn-dark"
          onClick={props.clickGameOverButton}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default GameOverModal;
