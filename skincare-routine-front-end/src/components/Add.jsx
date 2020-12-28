import React, { Component } from "react";
import NewForm from "./NewForm";

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skincare: [],
    };
    this.handleAddSkincare = this.handleAddSkincare.bind(this);
  }
  handleAddSkincare(skincare) {
    const copySkincare = [...this.state.skincare];
    copySkincare.unshift(skincare);
    this.setState({
      skincare: copySkincare,
      productType: "",
      productName: "",
      image: "",
      timeOfDay: "",
      skinConcerns: "",
    });
  }
  render() {
    return (
      <div className="main" id="add-main">
        <h3 className="page-header" id="add-to-your-routine-header">
          Add To Your Routine
        </h3>
        <NewForm handleAddSkincare={this.handleAddSkincare} />
      </div>
    );
  }
}
