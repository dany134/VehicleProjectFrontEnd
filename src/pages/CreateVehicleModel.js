import { inject, observer } from 'mobx-react';
import React, {Component} from 'react';
import {Button, Row, Col, Form} from 'react-bootstrap';

 class CreateVehicleModel extends Component {


   CreateModel = async (e) => {
         e.preventDefault();
          await this.props.CreateVehicleModelStore.createModel(this.props.history);
          console.log(this.props.CreateVehicleModelStore.status);
     }
   
    render() {
    
      
        return(
            <div className="container">
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={this.CreateModel}>
                            <Form.Group controlId="Name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text"  value={this.props.CreateVehicleModelStore.model.name} onChange={(e) => this.props.CreateVehicleModelStore.onChangeHandler(e)}  required placeholder="Name of the Model" name="name" />
                            </Form.Group>
                            <Form.Group controlId="Abrv">
                                <Form.Label>Abrv</Form.Label>
                                <Form.Control type="text"   value={this.props.CreateVehicleModelStore.model.abrv} onChange={(e) => this.props.CreateVehicleModelStore.onChangeHandler(e)} required placeholder="Abrv of the Model" name="abrv" />
                            </Form.Group>
                            <Form.Group controlId="VehicleMakeID">
                                <Form.Label>MakeId</Form.Label>
                                <Form.Control type="text"   value={this.props.CreateVehicleModelStore.model.VehicleMakeID} onChange={(e) => this.props.CreateVehicleModelStore.onChangeHandler(e)} required placeholder="ID of the Make" name="VehicleMakeID" />
                            </Form.Group>
                            
                            <Form.Group>
                                <Button variant="primary" type="submit">Accept</Button>
                            </Form.Group>
                            <Form.Group>
                                <Button variant="danger" href="/models">Cancel</Button>
                            </Form.Group>
                        </Form>

                    </Col>
                </Row>
                

            </div>
        )
    }
}
export default inject("CreateVehicleModelStore")(observer(CreateVehicleModel));