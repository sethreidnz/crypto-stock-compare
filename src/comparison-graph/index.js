import React, { Component } from "react";
import { Line } from "react-chartjs";
import { getEthereumDataFromApi, getMicrosoftDataFromApi } from '../api/index';
import { Loader } from "../components/loader";
import { transformIntoSeriesData } from "../utility";

export class ComparisonGraph extends Component {
  state = {
    ethereumData: null,
    microsoftData: null,
    hasLoaded: false
  }
  async componentDidMount() {
    const ethereumData = await getEthereumDataFromApi();
    const microsoftData = await getMicrosoftDataFromApi();
    const openPriceDataSeries = transformIntoSeriesData(ethereumData, microsoftData);
    this.setState({
      openPriceDataSeries,
      hasLoaded: true
    })
  }
  render() {
    const { hasLoaded, openPriceDataSeries } = this.state;
    if (!hasLoaded) return <Loader />;
    return (
      <div>
        <Line data={openPriceDataSeries} width="600" height="250"/>
      </div>
    );
  }
}