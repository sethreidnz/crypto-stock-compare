import React, { Component } from "react";
import { getEthereumData, getMicrosoftData } from "./api";
import "./App.css";

const ethereumData = getEthereumData();
const microsoftData = getMicrosoftData();

class App extends Component {
  render() {
    return <div>My first component</div>;
  }
}

export default App;
