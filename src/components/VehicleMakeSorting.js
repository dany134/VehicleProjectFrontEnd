import { observer, inject } from "mobx-react";
import React, { Component } from "react";

import { Button, ButtonGroup } from "react-bootstrap";

class VehicleMakeSorting extends Component {
  sorting = (val) => {
    this.props.rootStore.vehicleMakeStore.onSortChange(val);
  };
  render() {
    return (
      <div>
        <ButtonGroup aria-label="Basic example">
          <Button onClick={() => this.sorting("")} variant="secondary">
            Asc
          </Button>
          <Button onClick={() => this.sorting("name_desc")} variant="secondary">
            Desc
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}
export default inject("rootStore")(observer(VehicleMakeSorting));
