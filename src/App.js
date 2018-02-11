import React, { Component } from "react";
import "./App.css";

import { EthereumRow } from "./components/EthereumRow";
import { MicrosoftRow } from "./components/MicrosoftRow";
import { getMicrosoftDataFromApi } from "./api/index";

class App extends Component {
  async componentDidMount() {
    const microsoftData = await getMicrosoftDataFromApi();
    console.table(microsoftData);
  }
  render() {
    return (
      <div className="crypto-stock-compare">
        <h1>Crypto Stock Compare</h1>
        <section className="value-table">
          <h2>Ethereum</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Open</th>
                <th>Low</th>
                <th>High</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              <EthereumRow />
            </tbody>
          </table>
        </section>
        <section className="value-table">
          <h2>Microsoft</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Open</th>
                <th>Low</th>
                <th>High</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              <MicrosoftRow />
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default App;
