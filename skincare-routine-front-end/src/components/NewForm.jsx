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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value });
  }
  render() {
    return (
      <div className="container" id="new-form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label className="label">Product Type</Form.Label>
            <Form.Control
              as="select"
              id="product-type"
              name="Product Type"
              onChange={this.handleChange}
              value={this.state.productType}
            >
              <option>Cleanser</option>
              <option>Toner</option>
              <option>Essence</option>
              <option>Moisturizer</option>
              <option>Sunscreen</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
          <br />
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="label">Product Name</Form.Label>
            <Form.Control
              type="text"
              id="product-name"
              name="Product Name"
              onChange={this.handleChange}
              value={this.state.productName}
            />
          </Form.Group>
          <br />
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="label">Image</Form.Label>
            <Form.Control
              type="text"
              id="image"
              name="Image"
              onChange={this.handleChange}
              value={this.state.productName}
            />
          </Form.Group>
          <br />
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label className="label">Time of Day</Form.Label>
            <Form.Control
              as="select"
              id="time-of-day"
              name="Time Of Day"
              onChange={this.handleChange}
              value={this.state.timeOfDay}
            >
              <option>Morning</option>
              <option>Evening</option>
              <option>Both</option>
            </Form.Control>
          </Form.Group>
          <br />
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="label">Skin Concerns</Form.Label>
            <Form.Control
              type="text"
              id="skin-concerns"
              name="skin-concerns"
              onChange={this.handleChange}
              value={this.state.skinConcerns}
            />
          </Form.Group>
          <br />
          <div className="container-for-add-button">
            <Button
              type="submit"
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
