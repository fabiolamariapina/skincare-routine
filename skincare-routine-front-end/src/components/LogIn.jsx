import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "primereact/button";

export default class LogIn extends Component {
  render() {
    return (
      <div className="log-in-form">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <br />
            <Form.Control type="email" placeholder="Enter email" />
            <br />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <br />
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <br />
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <br />
          <Button
            label="LOG IN"
            className="p-button-raised p-button-rounded"
            id="log-in-button"
            type="submit"
          />
        </Form>
        <br />
      </div>
    );
  }
}
