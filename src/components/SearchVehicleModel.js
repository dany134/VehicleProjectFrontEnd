import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { observer, inject } from "mobx-react";
import "../App.css";

class SearchVehicleModel extends Component {
  render() {
    return (
      <div className="container">
        <Form onSubmit={(e) => this.searchMake(e)}>
          <Form.Group controlId="Searchodel">
            <Form.Control
              className="input-text"
              type="text"
              onChange={this.props.rootStore.vehicleModelStore.onSearchChange}
              value={this.props.rootStore.vehicleModelStore.searchString}
              placeholder="Search"
              name="searchString"
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
export default inject("rootStore")(observer(SearchVehicleModel));
