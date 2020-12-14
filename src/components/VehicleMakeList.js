import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { observer, inject } from "mobx-react";

class VehicleMakeList extends Component {
  async componentDidMount() {
    await this.props.rootStore.vehicleMakeStore.getMakesAsync();
  }

  deleteMake = (Id) => {
    if (window.confirm("Confirm delete")) {
      this.props.rootStore.vehicleMakeStore
        .deleteMake(Id)
        .then(() => this.props.rootStore.vehicleMakeStore.getMakesAsync());
    }
  };

  render() {
    if (this.props.rootStore.vehicleMakeStore.loading) {
      return <p>LOADING....</p>;
    }
    return (
      <div className="container">
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Abrv</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {this.props.rootStore.vehicleMakeStore.makes.map((make) => (
              <tr key={make.Id}>
                <td>{make.Name}</td>
                <td>{make.Abrv}</td>
                <th>
                  <Button variant="success" href={`/makes/edit/${make.Id}`}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => this.deleteMake(make.Id)}
                  >
                    Delete
                  </Button>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default inject("rootStore")(observer(VehicleMakeList));
