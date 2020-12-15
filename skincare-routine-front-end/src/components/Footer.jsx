import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="p-d-flex p-jc-between" id="footer">
        <p className="trademark">2020 © All Right Reserved</p>
        <p className="credit">
          Coded by{" "}
          <a
            className="linkedIn-link"
            href="https://www.linkedin.com/in/fabiolampina/"
            target="_blank"
          >
            Fabiola Pina
          </a>
        </p>
      </footer>
    );
  }
}
