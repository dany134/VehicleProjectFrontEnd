import React , {Component} from 'react';
import {Form} from 'react-bootstrap';
import {inject, observer} from 'mobx-react';

class MakesDropDown extends Component {
    async componentDidMount(){
        await  this.props.VehicleModelStore.getMakesAsync();
      }
      onChange = (e) => {
        const { value } = e.target;
        this.props.VehicleModelStore.searchString = value; 
        this.props.VehicleModelStore.getModelsAsync();
     }

      render(){
          return(
            <div className="container">
            <Form  onSubmit={(e) => this.searchMake(e)}>
            <Form.Group controlId="Searchmake" >                   
                            <Form.Control  as="select" className="drop-down" onChange={(e) => this.onChange(e)} value={this.props.VehicleModelStore.searchString} placeholder="Search" name="searc" >
                                {this.props.VehicleModelStore.makes.map(make => 
                                    <option key={make.Name}>{make.Name}</option>
                                    
                                    )}
                                    <option value={''}>{'All'}</option>
                                </ Form.Control>
                        </Form.Group>                        
            </Form>            
        </div>
          )
      }


}

export default inject("VehicleModelStore")(observer(MakesDropDown));