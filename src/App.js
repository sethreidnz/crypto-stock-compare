import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import { PriceTables } from "./price-tables";
import { ComparisonGraph } from "./comparison-graph";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="crypto-stock-compare">
          <header>
            <h1>Crypto Stock Compare</h1>
            <Link to="/">Table Comparison</Link>
            <Link to="/comparison-graph">Graph</Link>
          </header>
          <Route exact path="/" component={PriceTables} />
          <Route path="/comparison-graph" component={ComparisonGraph} />
        </div>
      </Router>
    );
  }
}

export default App;
