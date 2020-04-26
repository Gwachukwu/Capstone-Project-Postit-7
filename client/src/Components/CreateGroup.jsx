import React, { Component } from 'react'

class CreateGroup extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <div className="d-flex mt-3">
                <h1>Postit</h1>
                <h5 className="ml-auto align-self-center">Logout</h5>
                </div>
                <section className="text-center bg-warning w-50 p-5 mx-auto rounded mt-5">
                <h2>Create Group</h2>
                <form action="">
              <div className=" form-group mb-1">
                <input
                  type="text"
                  placeholder="Group Name"
                  className="form-control"
                />
              </div>
              <div className=" form-group mb-1">
                <input
                  type="text"
                  placeholder="Group Description(Optional)"
                  className="form-control"
                />
              </div>
              <div>
                    <i className="fa fa-user-plus"><strong> Add people</strong></i>
                    <button className="btn btn-outline-warning ml-2 bg-white"><strong>Create group</strong></button>
                </div>
              </form>
                </section>
            </div>
         );
    }
}
 
export default CreateGroup;