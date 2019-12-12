import React from "react";
import CheckBox from "../Checkbox/CheckBox";
import Button from "../Button/Button";
import PostPage from "../../pages/PostPage/PostPage";
import About from "../../pages/About";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import { Switch, Route, Redirect } from "react-router-dom";

const Main = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/sign-up" component={Register} />
        <Route exact path="/" component={PostPage} />
        <Route exact path="/about" component={About} />
        <Route path="/sign-in" component={Login} />
        <Redirect to="/sign-in"></Redirect>
      </Switch>
    </div>
  );
};
export default Main;
