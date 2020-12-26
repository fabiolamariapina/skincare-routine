import React, { Component } from "react";
import { Button } from "primereact/button";

export default class LogIn extends Component {
  render() {
    return (
      <div className="log-in-form">
          
        <Button
          label="LOG IN"
          className="p-button-raised p-button-rounded"
          id="log-in-button"
        />
      </div>
    );
  }
}
