import axios from 'axios';
const ApiUrl = 'https://localhost:44325/api/VehicleMakes';

class VehicleMakeService {

    getList = () => {
        return axios.get(ApiUrl + '/' + 'dropList');
    }


    get = (urlParams) => {
        return axios.get(ApiUrl, {
            params: {
                ...urlParams,
            },
        });
    };
    getById = (Id) => {
        return axios.get(ApiUrl + '/' + Id);
    };
    create = (make) =>  {
        return axios.post(ApiUrl, {
            Name: make.name,
            Abrv: make.abrv,
            
        });

    };
    editMake(id, make) {
        return axios.put(ApiUrl + '/' + id, {
            Id: id,
            Name: make.Name,
            Abrv: make.Abrv,
       });
    };
    deleteMake = (id) =>  {
        return axios.delete(ApiUrl + '/' + id);

    }
}

export default VehicleMakeService;