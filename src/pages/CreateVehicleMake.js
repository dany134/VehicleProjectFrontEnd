import { inject, observer } from 'mobx-react';
import React, {Component} from 'react';
import {Button, Row, Col, Form} from 'react-bootstrap';

 class CreateVehicleMake extends Component {
  

     CreateMake = async (e) => {
         e.preventDefault();
        await this.props.CreateVehicleMakeStore.createMake(this.props.history);
        console.log(this.props.CreateVehicleMakeStore.status);
     }

    render() {
        return(
            <div className="container">
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={this.CreateMake}>
                            <Form.Group controlId="MakeName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control value={this.props.CreateVehicleMakeStore.make.name} onChange={(e) => this.props.CreateVehicleMakeStore.onChangeHandler(e)} type="text" required placeholder="Name of the make" name="name" />
                            </Form.Group>
                            <Form.Group controlId="MakeAbrv">
                                <Form.Label>Abrv</Form.Label>
                                <Form.Control type="text" value={this.props.CreateVehicleMakeStore.make.abrv} onChange={(e) => this.props.CreateVehicleMakeStore.onChangeHandler(e)} required placeholder="Abrv of the make" name="abrv" />
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
export default inject("CreateVehicleMakeStore")(observer(CreateVehicleMake));