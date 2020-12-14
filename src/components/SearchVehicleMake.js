import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { observer, inject } from "mobx-react";
import "../App.css";

class SearchVehicleMake extends Component {
  async componentDidMount() {
    await this.props.rootStore.vehicleMakeStore.getMakesAsync();
  }

  render() {
    return (
      <div className="container">
        <Form onSubmit={(e) => this.searchMake(e)}>
          <Form.Group controlId="Searchmake">
            <Form.Control
              className="input-text"
              type="text"
              onChange={this.props.rootStore.vehicleMakeStore.onSearchChange}
              value={this.props.rootStore.vehicleMakeStore.searchString}
              placeholder="Search"
              name="searchString"
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
export default inject("rootStore")(observer(SearchVehicleMake));
