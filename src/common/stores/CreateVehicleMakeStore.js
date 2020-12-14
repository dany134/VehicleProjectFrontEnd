import { makeObservable, runInAction, observable, action } from "mobx";

class CreateVehicleMakeStore {
  rootStore;
  vehicleMakeService;
  constructor(rootStore, vehicleMakeService) {
    this.vehicleMakeService = vehicleMakeService;
    this.rootStore = rootStore;

    makeObservable(this, {
      make: observable,
      status: observable,
      loading: observable,
      createMake: action,
      onChangeHandler: action,
    });
  }

  loading = false;
  make = {
    Name: "",
    Abrv: "",
  };

  status = "initial";

  createMake = async (history) => {
    if (!this.make.name || !this.make.abrv) {
      runInAction(() => {
        this.status = "Fill out the forms";
      });
    } else {
      try {
        this.loading = true;
        await this.vehicleMakeService.create(this.make);
        runInAction(() => {
          this.loading = false;
        });
        history.push("/makes");
      } catch (error) {
        runInAction(() => {
          this.status = "error";
        });
      }
    }
  };
  onChangeHandler = (e) => {
    this.make = { ...this.make, [e.target.name]: e.target.value };
  };
}

export { CreateVehicleMakeStore };
