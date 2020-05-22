import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div class="card w-75">
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
