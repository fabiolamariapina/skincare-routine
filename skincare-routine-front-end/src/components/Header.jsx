import React, { Component } from "react";
import { Button } from "primereact/button";

export default class Header extends Component {
  render() {
    return (
      <header className="p-d-flex p-jc-between" id="header">
        <h1 className="app-name">skincare routine</h1>
        <Button
          label="LOG IN"
          className="p-button-raised p-button-rounded"
          id="log-in-button"
        />
      </header>
    );
  }
}
