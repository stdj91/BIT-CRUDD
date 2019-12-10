import React from "react";
import Title from "../../components/Title/Title";
import FormTitle from "../../components/FormTitle/FormTitle";
import Input from "../../components/Input/Input";
import "./Register.css";
import Checkbox from "../../components/Checkbox/CheckBox";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    };
  }
  getFirstName = n => {
    this.setState({ firstname: n });
  };
  getLastName = n => {
    this.setState({ lastname: n });
  };
  getEmail = n => {
    this.setState({ email: n });
  };
  getPassword = n => {
    this.setState({ password: n });
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
          <Button text={"SIGN UP"} />
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
