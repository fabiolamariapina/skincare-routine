import React, { Component } from "react";
import NewAccountForm from "./NewAccountForm";

export default class NewAccount extends Component {
  render() {
    return (
      <div>
        <h3 className="page-header" id="new-account-header">
          Create Account
        </h3>
        <NewAccountForm />
      </div>
    );
  }
}
