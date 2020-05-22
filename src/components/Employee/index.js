import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (

    <div className="list-group list-group-horizontal-lg">
      <div className="list-group-pic"><p></p><img alt={props.name} src={props.picture} /></div>
      <div className="list-group-name">
        <h5 className="card-title"><p></p>
          <strong>{props.name}</strong>
        </h5>
      </div>
      <div className="list-group-item"><strong>E-Mail</strong> <p>{props.email}</p></div>
      <div className="list-group-item"><strong>Phone Number</strong><p>{props.phone}</p>
      </div>
    </div>
  )

}

export default EmployeeCard;
