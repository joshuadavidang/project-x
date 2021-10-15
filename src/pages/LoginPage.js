import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import LandingPage from "./LandingPage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjaVXf5f-O7Ao46me8U5v7PE4s98aa3bU",
  authDomain: "project-x-1d9e6.firebaseapp.com",
  projectId: "project-x-1d9e6",
  storageBucket: "project-x-1d9e6.appspot.com",
  messagingSenderId: "888412838530",
  appId: "1:888412838530:web:7f38fb770995e8f280f29b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", isLoggedIn: false };
    this.authenticateLogin = this.authenticateLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log(this.state.isLoggedIn);
  }

  authenticateLogin = (e) => {
    const loginData = this.state;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        this.setState({ isLoggedIn: true });
        alert(this.state.isLoggedIn + " signed in!");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    // createUserWithEmailAndPassword(auth, loginData.email, loginData.password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorMessage);
    //     // ..
    //   });
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
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
