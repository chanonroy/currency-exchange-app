const currency = require('currency.js');

/**
 * Utility function to convert currency with floating point multiplication
 * @param {String || Number} amount - Amount of currency to convert from.
 * @param {String || Number} conversionRate - The conversion rate.
 * @return {String} convertedCurrency - Resulting amount
 */
export const convertCurrency = (amount, conversionRate) => {
  if (!amount) return null;
  return currency(amount, { separator: '' }).multiply(conversionRate).format();
};
