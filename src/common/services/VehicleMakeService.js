import axios from "axios";

class VehicleMakeService {
  url;
  constructor(url) {
    this.url = url;
  }

  getList = () => {
    return axios.get(this.url + "/" + "dropList");
  };

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
  create = (make) => {
    return axios.post(this.url, {
      Name: make.name,
      Abrv: make.abrv,
    });
  };
  editMake(id, make) {
    return axios.put(this.url + "/" + id, {
      Id: id,
      Name: make.Name,
      Abrv: make.Abrv,
    });
  }
  deleteMake = (id) => {
    return axios.delete(this.url + "/" + id);
  };
}

export { VehicleMakeService };
