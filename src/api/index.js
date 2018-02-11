import {
  DIGITAL_CURRENCY_DAILY_KEY,
  DIGITAL_CURRENCY_OPEN_KEY,
  DIGITAL_CURRENCY_HIGH_KEY,
  DIGITAL_CURRENCY_LOW_KEY,
  TIME_SERIES_DAILY_KEY,
  TIME_SERIES_DAILY_OPEN_KEY,
  TIME_SERIES_DAILY_HIGH_KEY,
  TIME_SERIES_DAILY_LOW_KEY
} from "../data/constants";
import { round } from "../utility/index";

const alphaVantageKey = process.env.REACT_APP_ALPHA_VANTAGE_KEY;
const ethereumData = require("../data/eth-data.json");
const microsoftData = require("../data/msft-data.json");

const createParsedDataObject = (rawRecord, date, openKey, highKey, lowKey) => {
  return {
    date,
    open: round(rawRecord[openKey], 2),
    high: round(rawRecord[highKey], 2),
    low: round(rawRecord[lowKey], 2)
  };
};

const parseRawData = (
  rawData,
  numberOfRecords,
  dataKey,
  openKey,
  highKey,
  lowKey
) => {
  const seriesData = rawData[dataKey];
  const parsedData = [];
  let recordCount = 0;
  for (const date in seriesData) {
    if (recordCount >= numberOfRecords + 1) {
      break;
    }
    parsedData.push(
      createParsedDataObject(seriesData[date], date, openKey, highKey, lowKey)
    );
    recordCount++;
  }

  return addChangeData(parsedData).slice(0, numberOfRecords);
};

const addChangeData = parsedData => {
  let previousDayData = null;
  let orderedChronologically = orderByDate(parsedData, false);
  const updatedData = orderedChronologically.map(dayData => {
    dayData = addChangeDataToDayData(dayData, previousDayData);
    previousDayData = dayData;
    return dayData;
  });
  return orderByDate(updatedData, true);
};

const orderByDate = (dayData, reverseChronological = false) => {
  return dayData.sort((a, b) => {
    return reverseChronological
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date);
  });
};

const addChangeDataToDayData = (dayData, previousDayData) => {
  if (!previousDayData) return dayData;
  const change =
    previousDayData !== null ? previousDayData.open - dayData.open : null;
  dayData.change = round(change / previousDayData.open, 2);
  return dayData;
};

const parseDigitalCurrencyData = (rawData, numberOfRecords) => {
  return parseRawData(
    rawData,
    numberOfRecords,
    DIGITAL_CURRENCY_DAILY_KEY,
    DIGITAL_CURRENCY_OPEN_KEY,
    DIGITAL_CURRENCY_HIGH_KEY,
    DIGITAL_CURRENCY_LOW_KEY
  );
};

const parseTimeSeriesData = (rawData, numberOfRecords) => {
  return parseRawData(
    rawData,
    numberOfRecords,
    TIME_SERIES_DAILY_KEY,
    TIME_SERIES_DAILY_OPEN_KEY,
    TIME_SERIES_DAILY_HIGH_KEY,
    TIME_SERIES_DAILY_LOW_KEY
  );
};

export const getEthereumData = () => {
  return parseDigitalCurrencyData(ethereumData, 5);
};

export const getMicrosoftData = () => {
  return parseTimeSeriesData(microsoftData, 5);
};

export const getEthereumDataFromApi = async () => {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=ETH&market=USD&apikey=${alphaVantageKey}`
  );
  const data = await response.json();
  return parseDigitalCurrencyData(data, 5);
};

export const getMicrosoftDataFromApi = async () => {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&apikey=${alphaVantageKey}`
  );
  const data = await response.json();
  return parseTimeSeriesData(data, 5);
};
