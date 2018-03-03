import React, { Component } from "react";
import { getEthereumDataFromApi, getMicrosoftDataFromApi } from '../api/index';
import { PriceTable } from "./components/PriceTable";
import { Loader } from "../components/loader";

export class PriceTables extends Component {
  state = {
    ethereumData: null,
    microsoftData: null,
    hasLoaded: false
  }
  async componentDidMount() {
    const ethereumData = await getEthereumDataFromApi();
    const microsoftData = await getMicrosoftDataFromApi();
    this.setState({
      ethereumData,
      microsoftData,
      hasLoaded: true
    })
  }
  render() {
    const { ethereumData, microsoftData, hasLoaded } = this.state;
    debugger;
    if (!hasLoaded) return <Loader />;
    return (
      <div>
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