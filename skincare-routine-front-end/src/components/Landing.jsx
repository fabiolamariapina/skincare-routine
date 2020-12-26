import React, { Component } from "react";
import { Button } from "primereact/button";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing-main">
        <div className="slideshow-container">
          <img
            className="slideshow-image-3"
            src="images/top-shelf-3.jpg"
            alt="Slide 3"
          />
          <img
            className="slideshow-image-2"
            src="images/top-shelf-2.jpg"
            alt="Slide 2"
          />
          <img
            className="slideshow-image-1"
            src="images/top-shelf-1.jpg"
            alt="Slide 1"
          />
        </div>

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
      </div>
    );
  }
}
