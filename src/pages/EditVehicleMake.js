import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";

class EditVehicleMake extends Component {
  componentDidMount = async () => {
    const makeId = this.props.match.params.id;
    const make = await this.props.rootStore.editVehicleMakeStore.getMake(
      makeId
    );
    console.log(make);
  };

  editMake = async (e) => {
    e.preventDefault();
    await this.props.rootStore.editVehicleMakeStore.saveChanges(
      this.props.match.params.id,
      this.props.history
    );
    console.log(this.props.rootStore.editVehicleMakeStore.status);
  };

  render() {
    return (
      <div className="container">
        <Row>
          <Col sm={6}>
            <Form onSubmit={this.editMake}>
              <Form.Group controlId="MakeName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={this.props.rootStore.editVehicleMakeStore.make.Name}
                  onChange={(e) =>
                    this.props.rootStore.editVehicleMakeStore.onChangeHandler(e)
                  }
                  type="text"
                  required
                  placeholder="Name of the make"
                  name="Name"
                />
              </Form.Group>
              <Form.Group controlId="MakeAbrv">
                <Form.Label>Abrv</Form.Label>
                <Form.Control
                  type="text"
                  value={this.props.rootStore.editVehicleMakeStore.make.Abrv}
                  onChange={(e) =>
                    this.props.rootStore.editVehicleMakeStore.onChangeHandler(e)
                  }
                  required
                  placeholder="Abrv of the make"
                  name="Abrv"
                />
              </Form.Group>
              <Form.Group>
                <Button variant="primary" type="submit">
                  Accept
                </Button>
              </Form.Group>
              <Form.Group>
                <Button variant="danger" href="/makes">
                  Cancel
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
export default inject("rootStore")(observer(EditVehicleMake));
