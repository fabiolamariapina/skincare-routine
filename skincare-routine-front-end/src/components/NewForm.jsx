import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const baseURL = "http://localhost:3003";

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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit(event) {
    event.preventDefault();
    fetch(baseURL + "/your-skincare-routine", {
      method: "POST",
      body: JSON.stringify(
        { productType: this.state.productType },
        { productName: this.state.productName },
        { image: this.state.image },
        { timeOfDay: this.state.timeOfDay },
        { skinConcerns: this.state.skinConcerns }
      ),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        this.props.handleAddSkincare(resJson);
        this.setState({
          productType: "",
          productName: "",
          image: "",
          timeOfDay: "",
          skinConcerns: "",
        });
      })
      .catch((error) => console.error({ Error: error }));
  }
  render() {
    return (
      <div className="container" id="new-form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label className="label">Product Type</Form.Label>
            <Form.Control
              as="select"
              type="text"
              id="product-type"
              name="productType"
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
              name="productName"
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
              name="image"
              onChange={this.handleChange}
              value={this.state.image}
            />
          </Form.Group>
          <br />
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label className="label">Time of Day</Form.Label>
            <Form.Control
              as="select"
              id="time-of-day"
              name="timeOfDay"
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
              name="skinConcerns"
              onChange={this.handleChange}
              value={this.state.skinConcerns}
            />
          </Form.Group>
          <br />
          <div className="container-for-add-button">
            <Button variant="primary" type="submit" id="add-button">
              Add To Your Routine
            </Button>
          </div>
          <br />
        </Form>
      </div>
    );
  }
}
