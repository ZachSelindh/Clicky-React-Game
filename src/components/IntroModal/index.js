import React from "react";
import "./style.css";

function IntroModal(props) {
  return (
    <div className="col-sm-12 col-md-8">
      <div id="intro-modal" className="modal">
        <h1 id="intro-modal-title"> Assemble the Avengers </h1>
        <p className="intro-modal-text">
          {" "}
          The Mad Titan, Thanos, threatens the fate of half the life in the
          universe. To defeat him, you must assemble the greatest heroes this
          planet has to offer. Click an Avenger to bring them into your team.
          But don't click them twice! This will create a time paradox and ensure
          that Thanos' plan comes to fruition.
        </p>
        <br />
        <img alt="Thanos" src="../assets/images/thanos.jpg" height="250px" />
        <br />
        <br />
        <p className="intro-modal-text">Whatever it takes. Good luck.</p>
        <button
          id="begin-button"
          className="btn btn-dark"
          onClick={props.clickBeginButton}
        >
          Begin the Game
        </button>
      </div>
    </div>
  );
}

export default IntroModal;
