import { makeObservable, runInAction, observable, action } from 'mobx';
import VehicleMakeService from '../services/VehicleMakeService'

class VehicleMakeStore {
    constructor(){
        
        this.vehicleMakeService = new VehicleMakeService();
        
        makeObservable(this, {
            makes: observable,
            status: observable,
            searchString: observable,
            loading: observable,
            page: observable,
            setPage: action
        })
        
    }
    loading = false;
    makes = [];
    status = 'initial';
    searchString = '';
    page = 1;

    getMakesAsync = async () => {
        this.loading = true;
        const params = {
            searchString: this.searchString,
            page: this.page,
        };
        try{
            const { data } = await this.vehicleMakeService.get(params);
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
    createMakeAsync = async (model) => {
        try {
            const response = await this.vehicleMakeService.post(model);
            if(response.status === 201) {
                runInAction(() => {
                    this.status = 'success';
                })
            }
        }catch (error) {
            runInAction(() => {
                this.status = 'error';

            });
        }
    }

    deleteMake = async (id) => {
        try{
            await this.vehicleMakeService.deleteMake(id);
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
   setPage = (number) => {
       runInAction(() => {
           this.page = number;
       });
   }
}


export default new VehicleMakeStore();