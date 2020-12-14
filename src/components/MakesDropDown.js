import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { inject, observer } from "mobx-react";

class MakesDropDown extends Component {
  async componentDidMount() {
    await this.props.rootStore.vehicleModelStore.getMakesAsync();
  }
  onChange = (e) => {
    const { value } = e.target;
    this.props.rootStore.vehicleModelStore.searchString = value;
    this.props.rootStore.vehicleModelStore.getModelsAsync();
  };

  render() {
    return (
      <div className="container">
        <Form onSubmit={(e) => this.searchMake(e)}>
          <Form.Group controlId="Searchmake">
            <Form.Control
              as="select"
              className="drop-down"
              onChange={(e) => this.onChange(e)}
              value={this.props.rootStore.vehicleModelStore.searchString}
              placeholder="Search"
              name="searc"
            >
              {this.props.rootStore.vehicleModelStore.makes.map((make) => (
                <option key={make.Name}>{make.Name}</option>
              ))}
              <option value={""}>{"All"}</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default inject("rootStore")(observer(MakesDropDown));
