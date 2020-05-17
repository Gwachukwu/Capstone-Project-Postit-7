import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <header className="d-flex mt-3">
          <h1>Postit</h1>
          <img
            className="ml-auto image-fluid rounded-circle dashboard-image"
            src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU2NjgxMDUwMDM5OTk5/_photo-by-per-anders-petterssongetty-images.jpg"
            alt="profile pic"
          />
          <h6 className="ml-4 align-self-center">Logout</h6>
        </header>
        <p className="mt-5">
          <Link to='/create_group' className="text-dark">
          <strong>Create Group</strong> <i className="fa fa-plus-circle"></i>
          </Link>
        </p>
        <div className=""></div>
        <div className="d-flex mt-auto">
          <p className="align-self-end d-none d-lg-flex pr-5">
            <span>&copy;</span> <strong className="ml-2 pr-2">Settings</strong>
          </p>
          <div className="w-75 ml-auto px-5 pt-2 pb-2 bg-light w-100">
           <p><span>Normal</span> <span>Urgent</span> <span>Critical</span></p>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Text"
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fa fa-send-o mr-2"></i>
                <i className="fa fa-paperclip"></i>
              </span>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
