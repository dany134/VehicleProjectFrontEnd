import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import {observer, inject} from 'mobx-react';
import '../App.css';



 class SearchVehicleModel extends Component {
       
     onSearchChange = (e) => {
        const { value } = e.target;
        this.props.VehicleModelStore.searchString = value; 
        this.props.VehicleModelStore.getModelsAsync();
     }
    
    render() {
        
        return(
            <div className="container">
                <Form  onSubmit={(e) => this.searchMake(e)}>
                <Form.Group controlId="Searchodel" >                   
                                <Form.Control className="input-text" type="text" onChange={this.onSearchChange} value={this.props.VehicleModelStore.searchString} placeholder="Search" name="searchString" />
                            </Form.Group>                        
                </Form>            
            </div>
        )
    }
}
export default inject("VehicleModelStore")(observer(SearchVehicleModel));