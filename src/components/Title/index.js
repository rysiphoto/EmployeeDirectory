import React from "react";
import "./style.css";

function Title(props) {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">Search your employees by name! Fun!</p>

        <nav className="navbar navbar-light bg-danger" id="navbar">
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search By Name" aria-label="Search"></input>
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
      </div>

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
