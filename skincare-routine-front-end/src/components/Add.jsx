import React, { Component } from "react";
import NewForm from "./NewForm";

export default class Add extends Component {
  render() {
    return (
      <div className="main" id="add-main">
        <h3 className="page-header" id="add-to-your-routine-header">
          Add To Your Routine
        </h3>
        <NewForm />
      </div>
    );
  }
}
