import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { observer, inject } from "mobx-react";
import "../App.css";

class VehicleModelPaging extends Component {
  render() {
    const changePage = (num) => {
      const pageNum = this.props.rootStore.vehicleModelStore.page + num;
      this.props.rootStore.vehicleModelStore.setPage(pageNum);
      this.props.rootStore.vehicleModelStore.getMakesAsync();
    };
    return (
      <div className="container">
        <Button
          className="page-button-prev"
          onClick={() => changePage(-1)}
          disabled={this.props.rootStore.vehicleModelStore.page === 1}
        >
          &laquo;
        </Button>

        <p className="page-text">
          PAGE: {this.props.rootStore.vehicleModelStore.page}
        </p>

        <Button className="page-button-next" onClick={() => changePage(1)}>
          &raquo;
        </Button>
      </div>
    );
  }
}

export default inject("rootStore")(observer(VehicleModelPaging));
