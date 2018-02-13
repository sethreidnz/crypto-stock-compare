import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { PriceTables } from "./price-tables";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={PriceTables} />
      </Router>
    );
  }
}

export default App;
