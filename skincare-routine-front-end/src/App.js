import React, { Component } from "react";
import "primeflex/primeflex.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skincare: [],
    };
  }
  render() {
    return (
      <div className="container">
        <Header />
        <main>
          <h3>Testing</h3>
        </main>
        <Footer />
      </div>
    );
  }
}
