const currency = require('currency.js');

/**
 * Utility function to convert currency with floating point multiplication
 * @param {String} fromAmount - Amount of currency to convert from.
 * @param {Number} conversionRate - The conversion rate.
 * @return {String} convertedCurrency - Resulting amount
 */
const convertCurrency = (amount, conversionRate) => {
  if (!amount) return null;
  return currency(amount, { separator: '' }).multiply(conversionRate).format();
};
export default convertCurrency;
