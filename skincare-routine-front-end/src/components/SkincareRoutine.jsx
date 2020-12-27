import React, { Component } from "react";
import { Button } from "primereact/button";

const baseURL = "http://localhost:3003";

export default class SkincareRoutine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skincare: [],
    };
    this.getSkincare = this.getSkincare.bind(this);
  }
  compoundDidMount() {
    this.getSkincare();
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
  render() {
    return (
      <div className="main" id="index-main">
        <h3 className="page-header" id="your-skincare-routine-header">
          Your Skincare Routine
        </h3>
        <div className="your-routine">
          {this.state.skincare.map((skincare) => {
            return (
              <h5 className="product-name" key={skincare._id}>
                {skincare.productName}
              </h5>
            );
          })}
        </div>
        <div className="container-for-add-button">
          <Button
            type="submit"
            label="Add To Your Routine"
            className="p-button-raised p-button-rounded"
            id="add-button"
          />
        </div>
      </div>
    );
  }
}
