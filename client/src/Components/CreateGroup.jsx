import React, { Component } from "react";
import { connect } from "react-redux";
import { createGroup } from "../Reducers/actions";
import { v4 as uuidv4 } from "uuid";

class CreateGroup extends Component {
  state = {
    display: false,
    warning: "",
    groupName: "",
    groupDescription: "",
    groupMembers: [],
  };
  displayMembers = () => {
    this.setState({
      display: !this.state.display,
    });
  };
  addGroupName = (e) => {
    this.setState({
      groupName: e.target.value,
    });
  };
  addGroupDescription = (e) => {
    this.setState({ groupDescription: e.target.value });
  };
  addMembers = (e) => {
    const members = [...this.state.groupMembers];
    if (e.target.checked) {
      members.push(e.target.value);
    } else {
      let index = members.indexOf(e.target.value);
      members.splice(index, 1);
    }
    this.setState({ groupMembers: members });
  };
  addGroup = (e) => {
    e.preventDefault();
    const newGroup = {
      id: uuidv4(),
      groupName: this.state.groupName,
      groupDescription: this.state.groupDescription,
      groupMembers: this.state.groupMembers,
      groupMessages: [],
    };
    if (this.state.groupName === "" || this.state.groupDescription === "") {
      this.setState({ warning: "Please fill all fields" });
    } else {
      this.props.createNewGroup(newGroup);
      this.setState({
        groupName: "",
        groupDescription: "",
        groupMembers: [],
        display: false,
      });
      this.props.history.push("/dash_board");
    }
  };
  render() {
    console.log(this.props.state.groups);
    return (
      <div className="container">
        <div className="d-flex mt-3">
          <h1>Postit</h1>
          <h5 className="ml-auto align-self-center">Logout</h5>
        </div>
        <section className="text-center bg-warning p-5 mx-auto w-50 rounded mt-5 create-section">
          <h2>Create Group</h2>
          <p>{this.state.warning}</p>
          <form action="">
            <div className=" form-group mb-1">
              <input
                type="text"
                value={this.state.groupName}
                onChange={this.addGroupName}
                placeholder="Group Name"
                className="form-control"
              />
            </div>
            <div className=" form-group mb-1">
              <input
                type="text"
                value={this.state.groupDescription}
                onChange={this.addGroupDescription}
                placeholder="Group Description(Optional)"
                className="form-control"
              />
            </div>
            <div className="d-flex flex-wrap justify-content-center create-group">
              <div
                className={
                  this.state.display
                    ? "bg-white px-2 border border-dark members-dropdown"
                    : "d-none"
                }
              >
                {this.props.state.users.members.map((user, i) => (
                  <label key={i} className="bg-white d-block text-left my-0">
                    <input
                      type="checkbox"
                      value={user}
                      onChange={this.addMembers}
                    />
                    {user}
                  </label>
                ))}
              </div>
              <i
                className="fa fa-user-plus add-people"
                onClick={this.displayMembers}
              >
                <strong> Add people</strong>
              </i>
              <div>
                <button
                  onClick={this.addGroup}
                  className="btn btn-outline-warning ml-2 bg-white"
                >
                  <strong>Create group</strong>
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createNewGroup: (newGroup) => {
      dispatch(createGroup(newGroup));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateGroup);
