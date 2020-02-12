import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Searchbar";

function App() {
  return (
    <div className="App">
      {/* <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p> */}
      <Nav/>
      <Jumbotron/>
      <Search/>
    </div>
  );
}


export default App;
