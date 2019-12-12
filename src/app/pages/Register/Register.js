import React from "react";
import Title from "../../components/Title/Title";
import FormTitle from "../../components/FormTitle/FormTitle";
import Input from "../../components/Input/Input";
import "./Register.css";
import Checkbox from "../../components/Checkbox/CheckBox";
import Button from "../../components/Button/Button";
import { http } from "../../../service/HttpService";
import { Link } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      check: false,
      error: ""
    };
  }
  getFirstName = name => {
    this.setState({ firstname: name });
  };
  getLastName = lastname => {
    this.setState({ lastname: lastname });
  };
  getEmail = email => {
    this.setState({ email: email });
  };
  getPassword = password => {
    this.setState({ password: password });
  };
  getCheck = n => {
    this.setState({ check: n });
  };

  postSignUpData = e => {
    e.preventDefault();
    const data = {
      name: `${this.state.firstName} ${this.state.lastName}`,

      email: this.state.email,
      password: this.state.password
    };

    http
      .post("/auth/register", data)
      .then(res => {
        this.props.history.push("/SignIn");
      })
      .catch(rej => {
        this.setState({ error: rej.response.data.message });
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Title text={"Register"} />
          <FormTitle title={"Sign up"} />
        </div>

        <div className="row">
          <Input
            cols={12}
            type={"text"}
            label={"First Name *"}
            onChange={this.getFirstName}
          />
          <Input
            cols={12}
            type={"text"}
            label={"Last Name *"}
            onChange={this.getLastName}
          />
        </div>

        <div className="row">
          <Input
            cols={12}
            type={"email"}
            label={"Email Address *"}
            onChange={this.getEmail}
          />
          <Input
            cols={12}
            type={"password"}
            label={"Password *"}
            onChange={this.getPassword}
          />
        </div>
        <div className="row">
          <Checkbox
            children={
              "I want to receive inspiration, marketing promotions and updates via email."
            }
          />
        </div>
        <div className="row">
          <Button text={"SIGN UP"} onClick={this.onClick} />
        </div>
        <div className="row">
          <p>
            <Link to="/login">Already have an account? Log in.</Link>
          </p>
        </div>
        <br />
      </div>
    );
  }
}
export default Register;
