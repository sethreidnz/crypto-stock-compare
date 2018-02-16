import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { PriceTables } from "./price-tables";
import { ComparisonGraph } from "./comparison-graph";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={PriceTables} />
          <Route exact path="/comparison-graph" component={ComparisonGraph} />
        </div>
      </Router>
    );
  }
}

export default App;
