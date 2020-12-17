import { action, makeObservable, observable, runInAction } from "mobx";

class EditVehicleMakeStore {
  constructor(vehicleMakeService) {
    this.vehicleMakeService = vehicleMakeService;
    makeObservable(this, {
      loading: observable,
      status: observable,
      make: observable,
      onChangeHandler: action,
      getMake: action,
      saveChanges: action,
    });
  }

  loading = null;
  status = "initial";
  make = {
    Name: "",
    Abrv: "",
  };
  getMake = async (Id) => {
    this.loading = true;
    try {
      const { data } = await this.vehicleMakeService.getById(Id);
      runInAction(() => {
        this.make = { ...data };
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
      await this.vehicleMakeService.editMake(Id, { ...this.make });
      runInAction(() => {
        this.loading = false;
        this.status = "success";
        history.push("/makes");
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
  onChangeHandler = (e) => {
    this.make = { ...this.make, [e.target.name]: e.target.value };
  };
}

export { EditVehicleMakeStore };
