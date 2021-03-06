import React, { Component } from "react";
import LogIn from "./LogIn";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing-main">
        <div className="landing-first-half">
          <img
            className="landing-image"
            src="images/top-shelf-3.jpg"
            alt="Slide 0"
          />
        </div>

        <div className="welcome">
          <div className="slogan">
            <h3 className="page-header" id="landing-header">
              HEALTHY SKIN STARTS HERE
            </h3>
          </div>
          <div className="log-in-create-account">
            <LogIn />
            <Link to="/users-new" className="new-user" href="/users/new">
              NEW USER? CLICK HERE TO CREATE AN ACCOUNT FOR FREE!
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
