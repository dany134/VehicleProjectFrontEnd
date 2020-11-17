import axios from 'axios';

const ApiUrl = 'https://localhost:44325/api/VehicleModels';

class VehicleModelService {


    get = (urlParams) => {
        return axios.get(ApiUrl, {
            params: {
                ...urlParams,
            },
        });
    }
    getById = (Id) =>{
        return axios.get(ApiUrl + '/' + Id);
    }
    create = (model) =>  {
        return axios.post(ApiUrl, {
            Name: model.name,
            Abrv: model.abrv,
            VehicleMakeID: model.VehicleMakeID
        });

    }
    delete = (id) =>  {
        return axios.delete(ApiUrl + '/' + id);

    }
    editModel(id, model) {
        return axios.put(ApiUrl + '/' + id, {
            Id: id,
            Name: model.Name,
            Abrv: model.Abrv,
            VehicleMakeID: model.VehicleMakeID,
       });
    };
}

export default VehicleModelService;