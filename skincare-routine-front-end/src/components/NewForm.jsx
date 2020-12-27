import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "primereact/button";

export default class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productType: "",
      productName: "",
      image: "",
      timeOfDay: "",
      skinConcerns: "",
    };
  }
  render() {
    return (
      <div className="container" id="new-form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group
            controlId="exampleForm.ControlSelect1"
            value={this.state.productType}
          >
            <Form.Label className="label"> Product Type</Form.Label>
            <Form.Control as="select">
              <option>Cleanser</option>
              <option>Toner</option>
              <option>Essence</option>
              <option>Moisturizer</option>
              <option>Sunscreen</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
          <br />
          <Form.Group
            controlId="exampleForm.ControlInput1"
            value={this.state.productName}
          >
            <Form.Label className="label">Product Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <br />
          <Form.Group
            controlId="exampleForm.ControlInput1"
            value={this.state.productName}
          >
            <Form.Label className="label">Product Image</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <br />
          <Form.Group
            controlId="exampleForm.ControlSelect1"
            value={this.state.timeOfDay}
          >
            <Form.Label className="label">Time of Day</Form.Label>
            <Form.Control as="select">
              <option>Morning</option>
              <option>Evening</option>
              <option>Both</option>
            </Form.Control>
          </Form.Group>
          <br />
          <Form.Group
            controlId="exampleForm.ControlInput1"
            value={this.state.skinConcerns}
          >
            <Form.Label className="label">Skin Concerns</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <br />
          <div className="container-for-add-button">
            <Button
              label="Add To Your Routine"
              className="p-button-raised p-button-rounded"
              id="add-button"
            />
          </div>
          <br />
        </Form>
      </div>
    );
  }
}
