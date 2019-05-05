import React from "react";
import "./style.css";

function ContinueModal(props) {
  return (
    <div className="col-sm-12 col-md-8">
      <div id="continue-modal" className="modal">
        <h1 id="continue-modal-title"> Victory </h1>
        <p className="continue-modal-text">
          {" "}
          You win! To continue playing, click continue.{" "}
        </p>
        <button
          id="continue-button"
          className="btn btn-dark"
          onClick={props.clickContinueButton}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default ContinueModal;
