export const round = (number, decimalPlaces) => {
  return Math.round(number * (Math.pow(10, decimalPlaces))) / Math.pow(10, decimalPlaces);
}