import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { observer, inject } from "mobx-react";
import VehicleMakeList from "../components/VehicleMakeList";
import SearchVehicleMake from "../components/SearchVehicleMake";
import VehicleMakePaging from "../components/VehicleMakePaging";
import VehicleMakeSorting from "../components/VehicleMakeSorting";
class VehicleMake extends Component {
  async componentDidMount() {
    //await  this.props.rootStore.vehicleMakeStore.getMakesAsync();
    console.log(this.props.rootStore);
  }

  render() {
    return (
      <div className="container">
        <VehicleMakeSorting />
        <SearchVehicleMake />
        <VehicleMakeList />
        <Button href="/makes/create" variant="dark">
          Create new
        </Button>

        <VehicleMakePaging />
      </div>
    );
  }
}
export default inject("rootStore")(observer(VehicleMake));
