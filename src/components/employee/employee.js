import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>E-Mail</strong> {props.email}
          </li>
          <li>
            <strong>Phone Number</strong> {props.phone}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
