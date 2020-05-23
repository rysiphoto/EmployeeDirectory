import React, { Component } from "react";
import "./style.css";

class SearchBar extends Component {
  state = {
    name: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {

  };

  render() {
    return (
      <>
        <div className="jumbotron">
          <h1 className="display-4">Employee Directory</h1>
          <p className="lead">Search your employees by name! Fun!</p>
        </div>

        <nav className="navbar navbar-light bg-danger" id="navbar">
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search"
              value={this.state.name} placeholder="Search By Name"
              onChange={this.handleInputChange} aria-label="Search"></input>
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit" onClick={this.handleInputChange}>Search</button>
          </form>
        </nav>
      </>
    );
  }
}


export default SearchBar;