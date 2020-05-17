import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
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
          <div className=" form-group mb-2">
            <input
              type="text"
              placeholder="Username"
              className="form-control"
            />
          </div>
          <div className=" form-group mb-2">
            <input type="email" placeholder="Email" className="form-control" />
          </div>
          <div className=" form-group mb-2">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
            />
          </div>
          <div className=" form-group mb-2">
            <input
              type="password"
              placeholder="Confirm password"
              className="form-control"
            />
          </div>
          <Link to="/dash_board" className="text-dark">
            <button type="button" class="btn btn-warning btn-block mt-4">
              <strong> Sign Up</strong>
            </button>
          </Link>
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
  );
};

export default Signup;
