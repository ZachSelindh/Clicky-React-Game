import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div
      key={props.name + "-" + props.id}
      id={props.id}
      className="avengerCard"
    >
      <div className="img-container">
        <img
          alt={props.name}
          src={props.image}
          height="190px"
          width="190px"
          onClick={props.clickButton}
          hidden={props.hidden}
        />
      </div>
    </div>
  );
}

export default Card;
