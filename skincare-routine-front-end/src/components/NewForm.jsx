import React, { Component } from "react";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

// productType in this.state
const selectProductType = [
  { label: "Cleanser", value: "CL" },
  { label: "Toner", value: "TO" },
  { label: "Essence", value: "ES" },
  { label: "Serum", value: "SE" },
  { label: "Moisturizer", value: "MO" },
  { label: "Sunscreen", value: "SU" },
  { label: "Other", value: "OT" },
];

//timeOfDay in this.state
const selectTimeOfDay = [
  { label: "Morning", value: "MR" },
  { label: "Evening", value: "EV" },
  { label: "Both", value: "BT" },
];

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
          <Dropdown
            value={this.state.productType}
            options={selectProductType}
            onChange={(e) => {
              this.setState({ productType: e.value });
            }}
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
          <Dropdown
            value={this.state.timeOfDay}
            options={selectTimeOfDay}
            onChange={(e) => {
              this.setState({ timeOfDay: e.value });
            }}
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
