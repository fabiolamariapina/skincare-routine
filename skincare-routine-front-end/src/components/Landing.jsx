import React, { Component } from "react";
import { Button } from "primereact/button";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing-main">
        <div className="welcome">
          <div className="slogan">
            <h3 className="page-header" id="landing-header">
              HEALTHY SKIN STARTS HERE
            </h3>
          </div>
          <div className="log-in-create-account">
            <Button
              label="LOG IN"
              className="p-button-raised p-button-rounded"
            />
            <a className="new-user" href="/users/new">
              NEW USER? CLICK HERE TO CREATE AN ACCOUNT FOR FREE!
            </a>
          </div>
        </div>
        <div class="slideshow-container" id="landing-images"></div>
      </div>
    );
  }
}
