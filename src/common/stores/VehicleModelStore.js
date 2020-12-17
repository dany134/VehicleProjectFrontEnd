import { action, makeObservable, observable, runInAction } from "mobx";

class VehicleModelStore {
  constructor(vehicleModelService, vehicleMakeService) {
    this.vehicleModelService = vehicleModelService;
    this.vehicleMakeService = vehicleMakeService;
    makeObservable(this, {
      makes: observable,
      models: observable,
      searchString: observable,
      page: observable,
      status: observable,
      getMakesAsync: action,
      getModelsAsync: action,
      sortBy: observable,
      onSearchChange: action,
      onSortChange: action,
      setPage: action,
    });
  }

  models = [];
  searchString = "";
  sortBy = "";
  page = 1;
  status = "inital";
  loading = false;
  makes = [];

  getMakesAsync = async () => {
    this.loading = true;

    try {
      const { data } = await this.vehicleMakeService.getList();
      runInAction(() => {
        this.makes = [...data];
        this.loading = false;
      });
    } catch (error) {
      this.status = "error";
      this.loading = false;
    }
  };

  getModelsAsync = async () => {
    this.loading = true;
    const params = {
      searchString: this.searchString,
      page: this.page,
      sortBy: this.sortBy,
    };
    try {
      const { data } = await this.vehicleModelService.get(params);
      runInAction(() => {
        this.models = [...data];
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
        this.loading = false;
      });
    }
  };

  deleteModel = async (id) => {
    try {
      await this.vehicleModelService.delete(id);
      runInAction(() => {
        this.status = "deleted";
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
  onSearchChange = async (e) => {
    const { value } = e.target;
    this.searchString = value;
    await this.getModelsAsync();
  };
  onSortChange = async (sort) => {
    this.sortBy = sort;
    await this.getModelsAsync();
  };
  setPage = (number) => {
    this.page = number;
  };
}
export { VehicleModelStore };
