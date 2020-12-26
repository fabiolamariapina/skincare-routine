import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SkincareRoutine from "./components/SkincareRoutine";
import Add from "./components/Add";

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
          <Switch>
            <Route
              path="/your-skincare-routine"
              exact
              component={SkincareRoutine}
            />
            <Route path="/add-to-your-routine" exact component={Add} />
          </Switch>
        </main>
        <Footer />
      </Router>
    );
  }
}
