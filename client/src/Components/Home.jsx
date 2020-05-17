import React, { Component } from "react";
import Modal from "./Modal";
import Signup from "./Signup";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <header className="d-flex justify-content-between">
          <h1 className="mt-3">Postit</h1>
          <h6 className=" align-self-end">
            <a
              href="#myModal"
              data-toggle="modal"
              data-target="#myModal"
              className="text-dark"
            >
              Log In
            </a>
          </h6>
        </header>
        <Signup />
        <Modal />
      </div>
    );
  }
}

export default Home;
