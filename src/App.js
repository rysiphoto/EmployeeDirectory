import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import EmployeeCard from "./components/Employee";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import employees from "./employees.json";
import './App.css';

class App extends Component {
  state = {
    employees
  };


  render() {
    return (
      <Wrapper>

        <SearchBar></SearchBar>

        <Title>Employee List</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard

            id={employee.id}
            key={employee.id}
            picture={employee.picture}
            name={employee.name}
            phone={employee.phone}
            email={employee.email}
            dob={employee.dob}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
