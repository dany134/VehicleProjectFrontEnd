import { makeObservable, observable, runInAction } from 'mobx';
import VehicleModelService from '../services/VehicleModelService';
import VehicleMakeService from '../services/VehicleMakeService';
class VehicleModelStore {
    constructor(){
        this.vehicleModelService = new VehicleModelService();
        this.vehicleMakeService = new VehicleMakeService();
        makeObservable(this, {
            makes: observable,
            models: observable,
            searchString: observable,
            page: observable,
            status: observable
        })
    }

    models = [];
    searchString = '';
   page = 1;
    status = 'inital';
    loading = false;
    makes = [];
  
      
    getMakesAsync = async () => {
        this.loading = true;
        
        try{
            const { data } = await this.vehicleMakeService.getList();
            runInAction(() => {
                this.makes = [...data];
                this.loading = false;

            })
        }
        catch(error){
            this.status = 'error';
            this.loading = false;
        };

    };

    getModelsAsync = async () => {
        this.loading = true;
        const params = {
            searchString: this.searchString,
            page: this.page,
        };
        try{
            const { data } = await this.vehicleModelService.get(params);
            runInAction(() => {
                this.models = [...data];
                this.loading = false;

            })
        }
        catch(error){
            this.status = 'error';
            this.loading = false;
        }

    }

    deleteModel = async (id) => {
        try{
            await this.vehicleModelService.delete(id);
            runInAction(() => {
                this.status = "deleted";
            });
        }
        catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }

    }
}
export default new VehicleModelStore();