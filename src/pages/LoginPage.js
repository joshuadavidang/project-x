import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.authenticateLogin = this.authenticateLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  authenticateLogin = (e) => {
    console.log("authenticate login");
    let loginData = this.state
    console.log(loginData)
  };

  handleChange(e) {
    this.setState({
        [e.target.name]: e.target.value
      });
   
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>

          <div onClick={this.authenticateLogin}>
            <Button variant="primary">Submit</Button>
          </div>
        </Form>
      </div>
    );
  }
}
