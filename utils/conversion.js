const currency = require('currency.js');

/**
 * Utility function to convert currency with floating point multiplication
 * @param {String} amount - Amount of currency to convert from.
 * @param {Number} conversionRate - The conversion rate.
 * @return {String} convertedCurrency - Resulting amount
 */
export const convertCurrency = (amount, conversionRate) => {
  if (!amount) return null;
  return currency(amount, { separator: '' }).multiply(conversionRate).format();
};

/**
 * Utility function to convert currency with floating point multiplication
 * @param {String || Number} fromAmount - Amount of currency to convert from.
 * @return {String} rate - the mirror rate
 */
export const calculateMirrorRate = (amount) => {
  if (!amount) return null;
  return currency(1).divide(amount).format();
}
