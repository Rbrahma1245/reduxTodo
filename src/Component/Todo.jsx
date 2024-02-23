/* eslint-disable react-refresh/only-export-components */
import { Component } from "react";
import { mapDispatchToProps, mapStateToProps } from "../Actions/Todo";
import { connect } from "react-redux";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      id: "",
    };
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { name, email, password } = this.state;
    if ((name == " ", email == "", password == "")) {
      alert("Please fill the details");
    } else {
      this.props.add(this.state);
      this.setState({ name: "", email: "", password: "" });
    }
  }
  handleDelete(id) {
    this.props.delete(id);
  }
  handleEdit(id) {
    this.props.edit(id);
  }
  handleUpdate(e, userData) {
    e.preventDefault();

    this.props.update(userData);
    this.setState({ name: "", email: "", password: "" });
  }

  componentDidUpdate(prevProps) {
    if (this.props.editUser && this.props.editUser !== prevProps.editUser) {
      let { name, email, password, id } = this.props.editUser;

      this.setState({ name: name, email: email, password: password, id: id });
    }
  }

  render() {
    let { userList } = this.props;
    let { name, email, password } = this.state;
    console.log(userList);

    return (
      <div>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            name="name"
            required
            value={name}
            placeholder="Enter Your name"
            onChange={this.handleChange.bind(this)}
          />
          <input
            type="email"
            name="email"
            required
            value={email}
            placeholder="Enter Your email"
            onChange={this.handleChange.bind(this)}
          />
          <input
            type="password"
            name="password"
            value={password}
            required
            placeholder="Enter Your password"
            onChange={this.handleChange.bind(this)}
          />

          {this.props.editUser == undefined ? (
            <button onClick={this.handleSubmit.bind(this)}>SUBMIT</button>
          ) : (
            <button onClick={(e) => this.handleUpdate(e, this.state)}>
              UPDATE
            </button>
          )}
        </form>

        <div>
          {userList.map((e, i) => {
            return (
              <div key={i} style={{ background: "lightblue" }}>
                <div>
                  <h2>Name : {e.name}</h2>
                  <h3>Email : {e.email}</h3>
                  <h4>Password : {e.password}</h4>
                </div>
                <button onClick={() => this.handleDelete(e.id)}>Delete</button>
                <button onClick={() => this.handleEdit(e.id)}>Edit</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
