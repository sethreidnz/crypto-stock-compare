export const round = (number, decimalPlaces) => {
  return (
    Math.round(number * Math.pow(10, decimalPlaces)) /
    Math.pow(10, decimalPlaces)
  );
};

export const transformIntoSeriesData = (ethereumData, microsoftData) => {
  const dates = ethereumData.map(dayData => dayData.date);
  return {
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
  };
};
