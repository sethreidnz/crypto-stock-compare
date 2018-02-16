import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getEthereumDataFromApi, getMicrosoftDataFromApi } from '../api/index';
import "./App.css";

import { RouteWithProps } from "./components/RouteWithProps";
import { PriceTables } from "./price-tables";
import { ComparisonGraph } from "./comparison-graph";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <RouteWithProps exact path="/" component={PriceTables} />
          <RouteWithProps exact path="/comparison-graph" component={ComparisonGraph} />
        </div>
      </Router>
    );
  }
}

export default App;
