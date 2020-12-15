import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skincare: [],
    };
  }
  render() {
    return (
      <div className="header">
        <header>
          <h1 className="app-name">Skincare Routine</h1>
        </header>
      </div>
    );
  }
}
