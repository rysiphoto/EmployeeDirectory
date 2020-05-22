import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (


    <div className="list-group list-group-horizontal-lg">
      <div className="list-group-pic">
        <img alt={props.name} src={props.picture} />
      </div>
      <div className="list-group-name">
        <strong>{props.name}</strong>
      </div>
      <div className="list-group-email">{props.email}
      </div>
      <div className="list-group-item">{props.phone}
      </div>
      <div className="list-group-item">{props.dob}
      </div>
    </div>
  )

}

export default EmployeeCard;
