import React, { Component } from "react";
import { Line } from "react-chartjs";
import { getEthereumDataFromApi, getMicrosoftDataFromApi } from '../api/index';
import { Spinner } from "../components/spinner";

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
    const dates = ethereumData.map(dayData => dayData.date);
    var openPriceDataSeries = {
      labels: dates,
	    datasets: [
        {
          label: "Ethereum",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: ethereumData.map(dayData => dayData.change)
        },
        {
          label: "Microsoft",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: microsoftData.map(dayData => dayData.change)
        }
      ]
    }
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