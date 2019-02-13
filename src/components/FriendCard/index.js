import React from "react";
import "./style.css";

function SchoolCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      {/* <div className="content"> */}
        {/* <ul> */}
          {/* <li>
            <strong>Name:</strong> {props.name}
          </li> */}
          {/* <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li> */}
        {/* </ul> */}
      {/* </div> */}
      <span onClick={() => props.removeFriend(props.id)} className="Move"></span>
    </div>
  );
}

export default SchoolCard;
