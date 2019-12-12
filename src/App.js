import React from "react";
import { Route } from "react-router-dom";
import Header from "./app/components/Header/Header";
import Footer from "./app/components/Footer/Footer";
import Register from "./app/pages/Register/Register";
import Login from "./app/pages/Login/Login";
import "./App.css";
import Main from "./app/components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

/* 
<Header />
<Login />
<Footer /> */
