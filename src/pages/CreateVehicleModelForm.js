import React from "react";
import { inject, observer } from "mobx-react";
import { Button } from "react-bootstrap";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
class CreateVehicleModelForm extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.rootStore.createVehicleModelStore.createModel(
      this.props.history
    );
    console.log(this.props.rootStore.createVehicleModelStore.status);
  };
  componentDidMount() {
    ValidatorForm.addValidationRule("maxLenght", (value) => {
      if (value.length > 24) {
        return false;
      }
      return true;
    });
  }

  render() {
    return (
      <ValidatorForm
        ref="form"
        onSubmit={this.handleSubmit}
        onError={(errors) => console.log(errors)}
      >
        <TextValidator
          label="Name"
          onChange={(e) =>
            this.props.rootStore.createVehicleModelStore.onChangeHandler(e)
          }
          name="name"
          value={this.props.rootStore.createVehicleModelStore.model.name}
          validators={["required", "maxLenght"]}
          variant="outlined"
          errorMessages={["This field is required", "Max lenght is 24"]}
        />
        <TextValidator
          label="Abrv"
          onChange={(e) =>
            this.props.rootStore.createVehicleModelStore.onChangeHandler(e)
          }
          name="abrv"
          value={this.props.rootStore.createVehicleModelStore.model.abrv}
          validators={["required"]}
          variant="outlined"
          errorMessages={["This field is required"]}
        />
        <TextValidator
          label="Make ID"
          onChange={(e) =>
            this.props.rootStore.createVehicleModelStore.onChangeHandler(e)
          }
          name="VehicleMakeID"
          value={
            this.props.rootStore.createVehicleModelStore.model.VehicleMakeID
          }
          validators={["required", "isNumber"]}
          variant="outlined"
          errorMessages={["This field is required", "Must a number"]}
        />
        <Button type="submit">Submit</Button>
        <Button variant="danger" href="/makes">
          Cancel
        </Button>
      </ValidatorForm>
    );
  }
}
export default inject("rootStore")(observer(CreateVehicleModelForm));
