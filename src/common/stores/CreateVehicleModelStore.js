import { makeObservable, runInAction, observable, action } from "mobx";

class CreateVehicleModelStore {
  rootStore;
  constructor(rootStore, vehicleModelService) {
    this.rootStore = rootStore;
    this.vehicleModelService = vehicleModelService;

    makeObservable(this, {
      model: observable,
      status: observable,
      loading: observable,
      createModel: action,
      onChangeHandler: action,
    });
  }
  searchString = "";
  page = 1;
  makes = [];
  loading = false;
  model = {
    Name: "",
    Abrv: "",
    VehicleMakeID: null,
  };

  status = "initial";

  createModel = async (history) => {
    if (!this.model.name || !this.model.abrv || !this.model.VehicleMakeID) {
      this.status = "Fill out the forms";
    } else {
      try {
        this.loading = true;
        await this.vehicleModelService.create(this.model);
        runInAction(() => {
          this.loading = false;
          history.push("/models");
        });
      } catch (error) {
        runInAction(() => {
          this.status = "error";
        });
      }
    }
  };
  onChangeHandler = (e) => {
    this.model = { ...this.model, [e.target.name]: e.target.value };
  };
}

export { CreateVehicleModelStore };
