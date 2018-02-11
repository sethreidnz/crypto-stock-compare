import { 
  DIGITAL_CURRENCY_DAILY_KEY,
  DIGITAL_CURRENCY_OPEN_KEY,
  DIGITAL_CURRENCY_HIGH_KEY,
  DIGITAL_CURRENCY_LOW_KEY,
  TIME_SERIES_DAILY_KEY,
  TIME_SERIES_DAILY_OPEN_KEY,
  TIME_SERIES_DAILY_HIGH_KEY,
  TIME_SERIES_DAILY_LOW_KEY
} from '../data/constants';

const ethereumData = require('../data/eth-data.json');
const microsoftData = require('../data/msft-data.json');

const createParsedDataObject = (rawRecord, date, openKey, highKey, lowKey) => {
  return {
    date,
    open: rawRecord[openKey],
    high: rawRecord[highKey],
    low: rawRecord[lowKey]
  };
}

const parseRawData = (rawData, numberOfRecords, dataKey, openKey, highKey, lowKey) => {
  const seriesData = rawData[dataKey];
  const parsedData = [];
  let recordCount = 0;
  for (const date in seriesData) {
    if (recordCount >= numberOfRecords + 1) {
      break;
    }
    parsedData.push(createParsedDataObject(
      seriesData[date],
      date,
      openKey,
      highKey,
      lowKey     
    ));
    recordCount++;
  }

  return addChangeData(parsedData).slice(0, numberOfRecords);
}

const addChangeData = (parsedData) => {
  let previousDayData = null;
  const orderedChronologically = orderByDate(parsedData, false);
  const updatedData = orderedChronologically.map(dayData => {
    dayData = addChangeDataToDayData(dayData, previousDayData);
    previousDayData = dayData;
    return dayData;
  });
  const reverseChrono = orderByDate(updatedData, true);
  return orderByDate(updatedData, true);
}

const orderByDate = (dayData, reverseChronological = false) => {
    return dayData.sort((a, b) => {
      return reverseChronological ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date);
    });
}

const addChangeDataToDayData = (dayData, previousDayData) => {
  if (previousDayData === null) {
    dayData.change = '';
  } else if (previousDayData.open < dayData.open) {
    dayData.change = 'up';
  } else if (previousDayData.open === dayData.open) {
    dayData.change = 'no-change';    
  } else if (previousDayData.open > dayData.open) {
    dayData.change = 'down';    
  }
  return dayData;
}

const parseDigitalCurrencyData = (rawData, numberOfRecords) => {
  return parseRawData(
    rawData,
    numberOfRecords,
    DIGITAL_CURRENCY_DAILY_KEY,
    DIGITAL_CURRENCY_OPEN_KEY,
    DIGITAL_CURRENCY_HIGH_KEY,
    DIGITAL_CURRENCY_LOW_KEY
  );
}

const parseTimeSeriesData = (rawData, numberOfRecords) => {
  return parseRawData(
    rawData,
    numberOfRecords,
    TIME_SERIES_DAILY_KEY,
    TIME_SERIES_DAILY_OPEN_KEY,
    TIME_SERIES_DAILY_HIGH_KEY,
    TIME_SERIES_DAILY_LOW_KEY
  );
}

export const getEthereumData = () => {
  return parseDigitalCurrencyData(ethereumData, 5);
};

export const getMicrosoftData = () => {
  return parseTimeSeriesData(microsoftData, 5);
};