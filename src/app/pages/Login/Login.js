import React from "react";
import Title from "../../components/Title/Title";
import FormTitle from "../../components/FormTitle/FormTitle";
import Input from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/CheckBox";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { http } from "../../../service/HttpService";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      error: ""
    };
  }
  onEmailChange = event => {
    this.setState({ email: event.target.value, error: "" });
  };
  onPassChange = event => {
    this.setState({ password: event.target.value, error: "" });
  };

  /* 
  getName = n => {
    this.setState({ name: n });
  }; */

  getEmail = n => {
    this.setState({ email: n });
  };

  getPassword = n => {
    this.setState({ password: n });
  };

  onSubmit = () => {
    http
      .post("http://crud-api.hypetech.xyz/v1/auth/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(data => localStorage.setItem("token", data.accessToken))
      .then(() => this.props.history.push("/"))
      .catch(error => this.setState({ error: error.message }));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <p>{this.state.error}</p>
          <Title text={"Login"} />
          <FormTitle title={"Sign in"} />
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
          <Checkbox children={"Remember me."} />
        </div>
        <div className="row">
          <Button text={"SIGN IN"} onClick={this.props.onSubmit} />
        </div>
        <div className="row">
          {/* <div className="col s6"> */}
          <p>
            <Link to="/">Forgot password?</Link>
          </p>
          <p>
            <Link to="/">Don't have an account? Sign up.</Link>
          </p>
          <br />
          {/* </div> */}
        </div>
      </div>
    );
  }
}
export default Login;
