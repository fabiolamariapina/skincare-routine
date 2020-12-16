import React, { Component } from "react";
import "primeflex/primeflex.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
  compoundDidMount() {
    this.getSkincare();
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
      <Router>
        <Header />
        <main>
          <h3>Your Skincare Routine</h3>
        </main>
        <Footer /> 
      </Router>
    );
  }
}
