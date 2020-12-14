import React, { Component } from "react";
import { Button } from "react-bootstrap";
import SearchVehicleModel from "../components/SearchVehicleModel";
import { observer, inject } from "mobx-react";
import VehicleModelList from "../components/VehicleModelList";
import MakesDropDown from "../components/MakesDropDown";
import VehicleMakeSorting from "../components/VehicleModelSorting";
import VehicleModelPaging from "../components/VehicleModelPaging";
class VehicleModel extends Component {
  render() {
    if (this.props.rootStore.vehicleModelStore.loading) {
      return <div>LOADING ....</div>;
    }
    return (
      <div className="container">
        <VehicleMakeSorting />
        <SearchVehicleModel />
        <MakesDropDown />
        <VehicleModelList />
        <Button href="/models/create" variant="dark">
          Create New
        </Button>
        <VehicleModelPaging />
      </div>
    );
  }
}
export default inject("rootStore")(observer(VehicleModel));
