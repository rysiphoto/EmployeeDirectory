import "./style.css";
import React from "react";



function Title(props) {


  return (
    <>

      <div className="list-group list-group-horizontal-lg" id="empTop">
        <div className="list-group-pic"></div>
        <div className="list-group-name"><h5 className="card-title"><strong>Name</strong></h5>
        </div>
        <div className="list-group-email"><h5 className="card-title"><strong>Email</strong></h5></div>
        <div className="list-group-item"><h5 className="card-title"><strong>Phone</strong></h5>
        </div>
        <div className="list-group-item"><h5 className="card-title"><strong>DOB</strong></h5>
        </div>
      </div>
    </>
  )
}

export default Title;
