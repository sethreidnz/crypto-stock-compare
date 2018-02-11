import React, { Component } from "react";
import { getEthereumData, getMicrosoftData } from "./api";
import "./App.css";

const ethereumData = getEthereumData();
const microsoftData = getMicrosoftData();

class App extends Component {
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
              <tr>
                <td>2018-02-09</td>
                <td>814.392</td>
                <td>783.753</td>
                <td>879.420</td>
                <td><span class="arrow-up"></span></td>
              </tr>
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
              <tr>
                <td>2018-02-09</td>
                <td>86.300</td>
                <td>83.830</td>
                <td>88.180</td>
                <td><span class="arrow-down"></span></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default App;
