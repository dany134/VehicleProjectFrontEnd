import { action, makeObservable, observable, runInAction } from "mobx";

class EditVehicleModelStore {
  rootStore;
  constructor(rootStore, vehicleModelService) {
    this.rootStore = rootStore;
    this.vehicleModelService = vehicleModelService;
    makeObservable(this, {
      loading: observable,
      status: observable,
      model: observable,
      onChangeHandler: action,
      getModel: action,
      saveChanges: action,
    });
  }

  loading = null;
  status = "initial";
  model = {
    Name: "",
    Abrv: "",
    VehicleMakeID: null,
  };
  getModel = async (Id) => {
    this.loading = true;
    try {
      const { data } = await this.vehicleModelService.getById(Id);
      runInAction(() => {
        this.model = { ...data };
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };

  saveChanges = async (Id, history) => {
    try {
      this.loading = true;
      await this.vehicleModelService.editModel(Id, { ...this.model });
      runInAction(() => {
        this.loading = false;
        this.status = "success";
        history.push("/models");
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
  onChangeHandler = (e) => {
    this.model = { ...this.model, [e.target.name]: e.target.value };
  };
}

export { EditVehicleModelStore };
