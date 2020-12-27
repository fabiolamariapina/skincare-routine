import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SkincareRoutine from "./components/SkincareRoutine";
import Add from "./components/Add";
import Landing from "./components/Landing";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Landing} />
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
