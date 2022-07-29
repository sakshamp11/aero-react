import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
export class Searchbox extends Component {
  render() {
    return (
        <div className="searchbox">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center"></div>
          <InputGroup className="col-6">
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </div>
      </div>
    )
  }
}

export default Searchbox