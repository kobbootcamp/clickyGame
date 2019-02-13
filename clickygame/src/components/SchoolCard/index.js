import React from "react";
import "./style.css";


function SchoolCard(props) {
  return (
    <div className="card border-light rounded"
    value={props.id} onClick={() => props.handleClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default SchoolCard;
