import React, { Component } from "react";

const baseURL = "http://localhost:3003";

export default class SkincareRoutine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skincare: [],
    };
    this.getSkincare = this.getSkincare.bind(this);
    this.handleAddSkincare = this.handleAddSkincare.bind(this);
    this.deleteSkincare = this.deleteSkincare.bind(this);
  }
  compoundDidMount() {
    this.getSkincare();
  }
  handleAddSkincare(skincare) {
    this.setState({
      skincare: this.state.skincare.concat(skincare),
    });
  }
  getSkincare() {
    fetch(baseURL + "/your-skincare-routine")
      .then((data) => {
        return data.json();
      })
      .then((parsedData) => {
        this.setState({
          skincare: parsedData,
        });
      });
  }
  deleteSkincare(id) {
    fetch(baseURL + "/your-skincare-routine" + id, {
      method: "DELETE",
    }).then((response) => {
      const findIndex = this.state.skincare.findIndex(
        (skincare) => skincare._id === id
      );
      const copySkincare = [...this.state.skincare];
      copySkincare.splice(findIndex, 1);
      this.setState({ skincare: copySkincare });
    });
  }
  render() {
    return (
      <div className="main" id="index-main">
        <h3 className="page-header" id="your-skincare-routine-header">
          Your Skincare Routine
        </h3>
      </div>
    );
  }
}
