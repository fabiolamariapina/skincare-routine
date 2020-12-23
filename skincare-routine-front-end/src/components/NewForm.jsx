import React, { Component } from "react";
import { Dropdown } from "primereact/dropdown";
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
      <div className="container" id="add-form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Product Type">Product Type</label>
          <input
            type="text"
            id="product-type"
            name="productType"
            onChange={this.handleChange}
            value={this.state.productType}
            placeholder="In what step of your routine does the product go?"
          />
          <label htmlFor="Product Name">Product Name</label>
          <input
            type="text"
            id="product-name"
            name="productName"
            onChange={this.handleChange}
            value={this.state.productName}
            placeholder="What is the name of the product?"
          />
          <label htmlFor="Image">Image</label>
          <input
            type="text"
            id="image"
            name="image"
            onChange={this.handleChange}
            value={this.state.image}
            placeholder="An image is worth a thousand words."
          />
          <label htmlFor="Product Type">Time of Day</label>
          <input
            type="text"
            id="time-of-day"
            name="timeOfDay"
            onChange={this.handleChange}
            value={this.state.timeOfDay}
            placeholder="Is this product used in your morning or evening skincare routine?"
          />
          <label htmlFor="Skin Concerns">Skincare Concerns</label>
          <input
            type="text"
            id="skincare-concerns"
            name="skincareConcerns"
            onChange={this.handleChange}
            value={this.state.skinConcerns}
            placeholder="What is this product used for?"
          />
          <Button
            label="Add To Your Routine"
            className="p-button-raised p-button-rounded"
          />
        </form>
      </div>
    );
  }
}
