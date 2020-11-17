import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import {observer, inject} from 'mobx-react';
import '../App.css';



 class SearchVehicleMake extends Component {
    async componentDidMount(){
       await  this.props.VehicleMakeStore.getMakesAsync();
     }
       
     onSearchChange = (e) => {
        const { value } = e.target;
        this.props.VehicleMakeStore.searchString = value; 
        this.props.VehicleMakeStore.getMakesAsync();
     }
    
    render() {
        
        return(
            <div className="container">
                <Form  onSubmit={(e) => this.searchMake(e)}>
                <Form.Group controlId="Searchmake" >                   
                                <Form.Control className="input-text" type="text" onChange={this.onSearchChange} value={this.props.VehicleMakeStore.searchString} placeholder="Search" name="searchString" />
                            </Form.Group>                        
                </Form>            
            </div>
        )
    }
}
export default inject("VehicleMakeStore")(observer(SearchVehicleMake));