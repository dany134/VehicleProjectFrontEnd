import React from "react";
import { inject, observer } from "mobx-react";
import { Button } from "react-bootstrap";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
class CreateVehicleMakeForm extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.rootStore.createVehicleMakeStore.createMake(
      this.props.history
    );
    console.log(this.props.rootStore.createVehicleMakeStore.status);
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
            this.props.rootStore.createVehicleMakeStore.onChangeHandler(e)
          }
          name="name"
          value={this.props.rootStore.createVehicleMakeStore.make.name}
          validators={["required", "maxLenght"]}
          variant="outlined"
          errorMessages={["This field is required", "Max lenght is 24"]}
        />
        <TextValidator
          label="Abrv"
          onChange={(e) =>
            this.props.rootStore.createVehicleMakeStore.onChangeHandler(e)
          }
          name="abrv"
          value={this.props.rootStore.createVehicleMakeStore.make.abrv}
          validators={["required"]}
          variant="outlined"
          errorMessages={["This field is required"]}
        />
        <Button type="submit">Submit</Button>
        <Button variant="danger" href="/makes">
          Cancel
        </Button>
      </ValidatorForm>
    );
  }
}
export default inject("rootStore")(observer(CreateVehicleMakeForm));
