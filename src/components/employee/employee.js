import React from "./node_modules/react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div class="card w-75">
      <div className="img-container">
        <img alt={props.name} src={props.picture} />
      </div>
      <div class="card-body">
        <h5 class="card-title">
          <strong>Name:</strong> {props.name}
        </h5>
        <p class="card-text">
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
