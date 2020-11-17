import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import SearchVehicleModel from '../components/SearchVehicleModel';
import {observer, inject} from 'mobx-react';
import VehicleModelList from '../components/VehicleModelList';
import MakesDropDown from '../components/MakesDropDown';
 class VehicleModel extends Component {


    render() {
        if(this.props.VehicleModelStore.loading){
            return <div>LOADING ....</div>
        }
        return(
            <div className="container">
                <SearchVehicleModel /> 
                <MakesDropDown />
                <VehicleModelList />
                <Button  href="/models/create" variant="dark">Create New</Button>
            </div>
        )
    }
}
export default inject("VehicleModelStore")(observer(VehicleModel));