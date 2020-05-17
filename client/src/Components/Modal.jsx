import React from "react";

const Modal = () => {
  return (
    <div className="modal" id="myModal">
      <div
        className="modal-dialogue mx-auto mt-5"
        style={{ maxWidth: "25rem" }}
      >
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
                placeholder="Username or Email"
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
  );
};

export default Modal;
