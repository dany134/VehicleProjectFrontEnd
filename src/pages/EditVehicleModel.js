import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";

class EditVehicleMake extends Component {
  componentDidMount = async () => {
    const modelId = this.props.match.params.id;
    await this.props.rootStore.editVehicleModelStore.getModel(modelId);
  };

  editModel = async (e) => {
    e.preventDefault();
    await this.props.rootStore.editVehicleModelStore.saveChanges(
      this.props.match.params.id,
      this.props.history
    );
    console.log(this.props.rootStore.editVehicleModelStore.status);
  };

  render() {
    return (
      <div className="container">
        <Row>
          <Col sm={6}>
            <Form onSubmit={this.editModel}>
              <Form.Group controlId="ModelName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={this.props.rootStore.editVehicleModelStore.model.Name}
                  onChange={(e) =>
                    this.props.rootStore.editVehicleModelStore.onChangeHandler(
                      e
                    )
                  }
                  type="text"
                  required
                  placeholder="Name of the make"
                  name="Name"
                />
              </Form.Group>
              <Form.Group controlId="ModelAbrv">
                <Form.Label>Abrv</Form.Label>
                <Form.Control
                  type="text"
                  value={this.props.rootStore.editVehicleModelStore.model.Abrv}
                  onChange={(e) =>
                    this.props.rootStore.editVehicleModelStore.onChangeHandler(
                      e
                    )
                  }
                  required
                  placeholder="Abrv of the make"
                  name="Abrv"
                />
              </Form.Group>
              <Form.Group controlId="VehicleMakeID">
                <Form.Label>Abrv</Form.Label>
                <Form.Control
                  type="text"
                  value={
                    this.props.rootStore.editVehicleModelStore.model
                      .VehicleMakeID
                  }
                  onChange={(e) =>
                    this.props.rootStore.editVehicleModelStore.onChangeHandler(
                      e
                    )
                  }
                  required
                  placeholder="Abrv of the make"
                  name="VehicleMakeID"
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
