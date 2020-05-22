import React from "react";
import "./style.css";

function Title(props) {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">Search your employee by name! Fun!</p>
      </div>
      <div className="list-group list-group-horizontal-lg" id="empTop">
        <div className="list-group-pic"></div>
        <div className="list-group-item"><h5 className="card-title"><strong>Name</strong></h5>
        </div>
        <div className="list-group-item"><h5 className="card-title"><strong>Email</strong></h5></div>
        <div className="list-group-item"><h5 className="card-title"><strong>Phone</strong></h5>
        </div>
        <div className="list-group-item"><h5 className="card-title"><strong>DOB</strong></h5>
        </div>
      </div>
    </>
  )
}

export default Title;
