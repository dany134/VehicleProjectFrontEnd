import axios from "axios";

class VehicleModelService {
  url;
  constructor(url) {
    this.url = url;
  }

  get = (urlParams) => {
    return axios.get(this.url, {
      params: {
        ...urlParams,
      },
    });
  };
  getById = (Id) => {
    return axios.get(this.url + "/" + Id);
  };
  create = (model) => {
    return axios.post(this.url, {
      Name: model.name,
      Abrv: model.abrv,
      VehicleMakeID: model.VehicleMakeID,
    });
  };
  delete = (id) => {
    return axios.delete(this.url + "/" + id);
  };
  editModel(id, model) {
    return axios.put(this.url + "/" + id, {
      Id: id,
      Name: model.Name,
      Abrv: model.Abrv,
      VehicleMakeID: model.VehicleMakeID,
    });
  }
}

export { VehicleModelService };
