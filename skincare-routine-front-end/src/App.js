import React, { Component } from "react";
import "primeflex/primeflex.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const baseURL = "http://localhost:3003";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skincare: [],
    };
    this.getSkincare = this.getSkincare.bind(this);
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
