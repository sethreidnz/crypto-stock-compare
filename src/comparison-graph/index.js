import React, { Component } from "react";
import { Line } from "react-chartjs";
import { getEthereumDataFromApi, getMicrosoftDataFromApi } from '../api/index';
import { Spinner } from "../components/spinner";
import { transformIntoSeriesData } from "../utility";

export class ComparisonGraph extends Component {
  constructor() {
    super();
    this.state = {
      dates: null,
      openPriceDataSeries: null,
      hasLoaded: false
    }
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
    if (!hasLoaded) return <Spinner />;
    return <Line data={openPriceDataSeries} width="600" height="250"/>;
  }
}