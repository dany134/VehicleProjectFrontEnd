import {  makeObservable, runInAction, observable, action } from 'mobx';
import VehicleModelService from '../services/VehicleModelService'
import VehicleMakeService from '../services/VehicleMakeService';


class CreateVehicleModelStore {
    constructor(){
        this.vehicleMakeService = new VehicleMakeService();
        this.vehicleModelService = new VehicleModelService();
        
        
        makeObservable(this, {
          model: observable,
           status: observable,
            loading: observable,
            createModel: action,
            onChangeHandler: action,
            
        });
        
    }
    searchString = '';
    page = 1;
    makes = [];
    loading = false;
   model = {
     Name: '',
     Abrv: '',
      VehicleMakeID: null
  };
   
    status = 'initial';

    createModel = async (history) => {
        if(!this.model.name || !this.model.abrv || !this.model.VehicleMakeID){
            runInAction(() => {
                this.status = "Fill out the forms";
                         
            })
        }
        else{
            try{
                this.loading = true;
                await this.vehicleModelService.create(this.model);
                this.loading = false;
                history.push("/models");
                
            }
            catch (error) {
                runInAction(() => {
                    this.status = "error";
                });
            }
        } 
    }
    onChangeHandler = (e) => {
        this.model = { ...this.model, [e.target.name]: e.target.value };
    }



}


export default new CreateVehicleModelStore();
