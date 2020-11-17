import { inject, observer } from 'mobx-react';
import React, {Component} from 'react';
import {Button, Row, Col, Form} from 'react-bootstrap';

 class EditVehicleMake extends Component {
  
     componentDidMount = async () => {
        const modelId = this.props.match.params.id;
        await this.props.EditVehicleModelStore.getModel(modelId);
        
        
     }

     editModel =  async (e) => {
         e.preventDefault();
         await this.props.EditVehicleModelStore.saveChanges(
             this.props.match.params.id,
             this.props.history
         );
         console.log(this.props.EditVehicleModelStore.status);
     }

    render() {
        return(
            <div className="container">
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={this.editModel}>
                            <Form.Group controlId="ModelName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control value={this.props.EditVehicleModelStore.model.Name} onChange={(e) => this.props.EditVehicleModelStore.onChangeHandler(e)} type="text" required placeholder="Name of the make" name="Name" />
                            </Form.Group>
                            <Form.Group controlId="ModelAbrv">
                                <Form.Label>Abrv</Form.Label>
                                <Form.Control type="text" value={this.props.EditVehicleModelStore.model.Abrv} onChange={(e) => this.props.EditVehicleModelStore.onChangeHandler(e)} required placeholder="Abrv of the make" name="Abrv" />
                            </Form.Group>
                            <Form.Group controlId="VehicleMakeID">
                                <Form.Label>Abrv</Form.Label>
                                <Form.Control type="text" value={this.props.EditVehicleModelStore.model.VehicleMakeID} onChange={(e) => this.props.EditVehicleModelStore.onChangeHandler(e)} required placeholder="Abrv of the make" name="VehicleMakeID" />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="primary" type="submit">Accept</Button>
                            </Form.Group>
                            <Form.Group>
                                <Button variant="danger" href="/makes">Cancel</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

            </div>
        )
    }
}
export default inject("EditVehicleModelStore")(observer(EditVehicleMake));