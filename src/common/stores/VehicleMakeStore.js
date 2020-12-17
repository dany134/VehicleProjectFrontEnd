import { makeObservable, runInAction, observable, action } from "mobx";

class VehicleMakeStore {
  vehicleMakeService;
  constructor(vehicleMakeService) {
    this.vehicleMakeService = vehicleMakeService;

    makeObservable(this, {
      makes: observable,
      status: observable,
      searchString: observable,
      sortBy: observable,
      loading: observable,
      page: observable,
      setPage: action,
      getMakesAsync: action,
      onSearchChange: action,
      onSortChange: action,
    });
  }
  loading = false;
  makes = [];
  status = "initial";
  sortBy = "";
  searchString = "";
  page = 1;

  getMakesAsync = async () => {
    this.loading = true;
    const params = {
      searchString: this.searchString,
      page: this.page,
      sortBy: this.sortBy,
    };
    try {
      const { data } = await this.vehicleMakeService.get(params);
      runInAction(() => {
        this.makes = [...data];
        this.loading = false;
      });
    } catch (error) {
      this.status = "error";
      this.loading = false;
    }
  };
  createMakeAsync = async (model) => {
    try {
      const response = await this.vehicleMakeService.post(model);
      if (response.status === 201) {
        runInAction(() => {
          this.status = "success";
        });
      }
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };

  deleteMake = async (id) => {
    try {
      await this.vehicleMakeService.deleteMake(id);
      runInAction(() => {
        this.status = "deleted";
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
  setPage = (number) => {
    this.page = number;
  };
  onSearchChange = async (e) => {
    const { value } = e.target;
    this.searchString = value;
    await this.getMakesAsync();
  };
  onSortChange = async (sort) => {
    this.sortBy = sort;
    await this.getMakesAsync();
  };
}

export { VehicleMakeStore };
