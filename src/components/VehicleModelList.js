import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { observer, inject } from "mobx-react";

class VehicleModelList extends Component {
  async componentDidMount() {
    await this.props.rootStore.vehicleModelStore.getModelsAsync();
  }

  deleteModel = async (id) => {
    if (window.confirm("Confirm delete")) {
      await this.props.rootStore.vehicleModelStore
        .deleteModel(id)
        .then(() => this.props.rootStore.vehicleModelStore.getModelsAsync());
    }
  };

  render() {
    return (
      <div className="container">
        <Table className="model-table" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Abrv</th>
              <th>Make</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {this.props.rootStore.vehicleModelStore.models.map((model) => (
              <tr key={model.Id}>
                <td>{model.Name}</td>
                <td>{model.Abrv}</td>
                <td>{model.VehicleMakeID}</td>
                <td>
                  <Button variant="success" href={`/models/edit/${model.Id}`}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => this.deleteModel(model.Id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default inject("rootStore")(observer(VehicleModelList));
