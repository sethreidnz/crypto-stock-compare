import React, { Component } from "react";
import "./App.css";
import { getEthereumData, getMicrosoftData } from './api/index';

import { PriceTable } from "./components/PriceTable";

const ethereumData = getEthereumData();
const microsoftData = getMicrosoftData();

class App extends Component {
  render() {
    return (
      <div className="crypto-stock-compare">
        <h1>Crypto Stock Compare</h1>
        <section className="value-table">
          <h2>Ethereum</h2>
          <PriceTable priceData={ethereumData} />
        </section>
        <section className="value-table">
          <h2>Microsoft</h2>
          <PriceTable priceData={microsoftData} />
        </section>
      </div>
    );
  }
}
export default App;