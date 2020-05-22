import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card w-75">
      <div className="img-container">
        <img alt={props.name} src={props.picture} />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <strong>Name:</strong> {props.name}
        </h5>
        <p className="card-text">
          <strong>E-Mail</strong> {props.email}
        </p>
        <p>
          <strong>Phone Number</strong> {props.phone}
        </p>


      </div>
    </div>
  )

}

export default EmployeeCard;
