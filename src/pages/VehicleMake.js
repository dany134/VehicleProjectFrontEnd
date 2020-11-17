import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import {observer, inject} from 'mobx-react';
import VehicleMakeList from '../components/VehicleMakeList';
import SearchVehicleMake from '../components/SearchVehicleMake';
import VehicleMakePaging from '../components/VehicleMakePaging';
 class VehicleMake extends Component {
    async componentDidMount(){
       await  this.props.VehicleMakeStore.getMakesAsync();
     }
       
    render() {
        
        return(
            <div className="container">
                <SearchVehicleMake />
                <VehicleMakeList />
                <Button href="/makes/create" variant="dark">Create new</Button>
                
                <VehicleMakePaging />
            </div>
        )
    }
}
export default inject("VehicleMakeStore")(observer(VehicleMake));