import React, { Component } from "react";

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
        <section className="d-flex justify-content-center">
          <div className="bg-warning p-5 my-5 d-none d-sm-block">
            <h4>Best Group Messaging Platform</h4>
            <div className="d-flex py-2">
              <i className="fa fa-check mr-2 mt-1"></i>
              <h5>Stay in touch with your team</h5>
            </div>
            <div className="d-flex py-2">
              <i className="fa fa-check mr-2 mt-1"></i>
              <h5>Be updated in real time</h5>
            </div>
            <div className="d-flex py-2">
              <i className="fa fa-check mr-2 mt-1"></i>
              <h5>Stay connected</h5>
            </div>
          </div>
          <div className="bg-white p-5">
            <h4>Create your Postit account</h4>
            <form action="">
              <div className=" form-group mb-1">
                <input
                  type="text"
                  placeholder="First name"
                  className="form-control"
                />
              </div>
              <div className=" form-group mb-1">
                <input
                  type="text"
                  placeholder="Last name"
                  className="form-control"
                />
              </div>
              <div className=" form-group mb-1">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div className=" form-group mb-1">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              <div className=" form-group mb-1">
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="form-control"
                />
              </div>
              <button type="button" class="btn btn-warning btn-block mt-4">
                <strong> Sign Up</strong>
              </button>

              <div class="form-group" mx-3>
                <p class="text-center mt-5">
                  <strong>Already have an account ?</strong>
                  <a
                    id="Mylogin"
                    href="#myModal"
                    data-toggle="modal"
                    data-target="#myModal"
                    class="text-warning"
                  >
                    <strong className="ml-1">Log In</strong>
                  </a>
                </p>
              </div>
            </form>
          </div>
        </section>
        <div className="modal" id="myModal">
          <div className="modal-dialogue mx-auto mt-5" style={{ maxWidth: "25rem" }}>
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Enter your Login details</h4>
                <button className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div className=" form-group mb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className=" form-group mb-5">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div className="modal-footer">
                  <button className="btn btn-danger" data-dismiss="modal">
                    <strong>Close</strong>
                  </button>
                  <button class="btn btn-warning" data-dismiss="modal">
                    <strong>Log In</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
